import { GoogleGenerativeAI } from "@google/generative-ai"
import fs from "fs"
import path from "path"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

// Simple in-memory rate limiting map
// Keys are IP addresses, values are { count, timestamp }
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

export async function POST(req: Request) {
  try {
    const { message, userId, locale } = await req.json()
    
    // 1. Get the user's identity (fallback to IP if not provided)
    const identity = userId || req.headers.get("x-forwarded-for") || "unknown"
    
    // 2. Parse the limit from env, default to 5 requests per window
    const LIMIT = parseInt(process.env.USER_CHAT_LIMIT || "5", 10)
    const WINDOW_MS = 60 * 60 * 1000 // 1 hour window
    
    const now = Date.now()
    const userState = rateLimitMap.get(identity)

    if (userState) {
      if (now - userState.timestamp < WINDOW_MS) {
        if (userState.count >= LIMIT) {
          return Response.json(
            { error: `Rate limit exceeded. You can only send ${LIMIT} messages per hour.` },
            { status: 429 }
          )
        }
        userState.count += 1
      } else {
        // Window expired, reset their count
        rateLimitMap.set(identity, { count: 1, timestamp: now })
      }
    } else {
      // First time seeing this identity
      rateLimitMap.set(identity, { count: 1, timestamp: now })
    }

    const aboutPath = path.join(process.cwd(), "data", "about.md")
    const projectsPath = path.join(process.cwd(), "data", "projects.md")

    const about = fs.readFileSync(aboutPath, "utf8")
    const projects = fs.readFileSync(projectsPath, "utf8")

    const knowledge = about + "\n" + projects

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

    const { buildSystemPrompt } = await import("./prompt")

    const result = await model.generateContent(buildSystemPrompt(knowledge, message, locale))

    const reply = result.response.text()

    return Response.json({ reply })
  } catch (error: any) {
    console.error("Chat API Error:", error)
    return Response.json({ error: error.message || "Failed to process chat message" }, { status: 500 })
  }
}
