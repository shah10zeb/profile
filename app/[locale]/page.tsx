import Image from "next/image";
import ChatWidget from "@/components/ChatWidget";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });
  const name = t('name');
  const title = t('title');
  const summary = t('summary');

  return {
    title: `${name} | ${title}`,
    description: summary,
    keywords: ["Software Engineer", "Full-stack", "Microservices", "Next.js", name],
    openGraph: {
      title: `${name} | ${title}`,
      description: summary,
      type: "website",
      locale: locale,
      siteName: name,
      images: [
        {
          url: "/shahzeb.png",
          width: 800,
          height: 600,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | ${title}`,
      description: summary,
      images: ["/shahzeb.png"],
    },
  };
}

export default function Home() {
  const tHero = useTranslations("Hero");
  const tExp = useTranslations("Experience");
  const tSkills = useTranslations("Skills");
  const tProjects = useTranslations("Projects");
  const tEdu = useTranslations("Education");
  const tInterests = useTranslations("Interests");
  const tContact = useTranslations("Contact");

  const jobs: any[] = tExp.raw("jobs");
  const skillCategories: any[] = tSkills.raw("categories");
  const projectItems: any[] = tProjects.raw("items");
  const eduItems: any[] = tEdu.raw("items");
  const interestItems: string[] = tInterests.raw("items");

  // Background image using a stunning tech/space theme from Unsplash
  const bgImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

  return (
    <main className="relative min-h-screen text-slate-200 font-sans selection:bg-purple-500/30">
      <LanguageSwitcher />

      {/* Fixed Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/90 to-[#0a0a0a] backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-24">

        {/* --- Hero Section --- */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 group">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              {tHero("portfolioBadge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
              {tHero("name")}
            </h1>
            <p className="text-2xl font-medium text-purple-400">
              {tHero("title")}
            </p>
            <div className="text-slate-400 leading-relaxed max-w-2xl text-lg backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
              {tHero("summary")}
            </div>
          </div>

          {/* Profile Picture */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex-shrink-0 relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 opacity-70 blur-md group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-full h-full rounded-full bg-slate-900 border-2 border-slate-700/50 flex items-center justify-center overflow-hidden">
              <Image
                src="/shahzeb.png"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
            {tContact("sectionTitle")}
          </h2>
          <div className="flex flex-wrap gap-6">
            <a href="https://www.linkedin.com/in/mohammad-shahzeb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-md text-slate-200 font-medium hover:bg-blue-600/30 hover:border-blue-500/50 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-1.036 0-1.875-.839-1.875-1.875s.839-1.875 1.875-1.875 1.875.839 1.875 1.875-.839 1.875-1.875 1.875zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              {tContact("linkedin")}
            </a>
            <a href="mailto:sendtoshahzeb@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-red-600/20 border border-red-500/30 backdrop-blur-md text-slate-200 font-medium hover:bg-red-600/30 hover:border-red-500/50 transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)]">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              {tContact("email")}
            </a>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            {tExp("sectionTitle")}
          </h2>
          <div className="space-y-6 pl-4 border-l border-purple-500/20">
            {jobs.map((job, i) => (
              <div key={i} className="relative pl-8 group">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 group-hover:bg-blue-400 transition-all shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-slate-100">{job.title}</h3>
                  <p className="text-sm font-medium text-purple-400 mb-4">{job.duration}</p>
                  <ul className="space-y-3">
                    {job.points.map((pt: any, j: number) => (
                      <li key={j} className="text-slate-400 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 text-purple-500/50 mt-1">▹</span>
                        <span>
                          {pt.highlight && <strong className="text-slate-200">{pt.highlight} </strong>}
                          {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            {tSkills("sectionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors backdrop-blur-md">
                <h3 className="text-lg font-bold text-blue-300 mb-4">{category.title.replace(/\*\*/g, '')}</h3>
                <ul className="space-y-2">
                  {category.items.map((skill: any, j: number) => (
                    <li key={j} className="text-sm text-slate-400 flex flex-col">
                      {skill.name && <span className="text-slate-200 font-semibold">{skill.name}</span>}
                      <span className="text-slate-500">{skill.values}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            {tProjects("sectionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectItems.map((project, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />

                <h3 className="text-lg font-medium text-emerald-300 relative z-10 leading-relaxed">{project.title.replace(/\*\*/g, '')}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* --- Education Section --- */}
        {eduItems.length > 0 && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-slate-500 rounded-full"></span>
              {tEdu("sectionTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eduItems.map((e, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold text-slate-200">{e.uni}</h3>
                  <p className="text-purple-400 text-sm mt-1">{e.degree}</p>
                  <p className="text-slate-400 text-sm mt-2 font-mono">{e.scorePrefix} {e.score}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- Interests Section --- */}
        {interestItems.length > 0 && (
          <section className="space-y-8 pb-12">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-rose-500 rounded-full"></span>
              {tInterests("sectionTitle")}
            </h2>
            <div className="flex flex-wrap gap-4">
              {interestItems.map((interest, i) => (
                <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-300 font-medium hover:border-rose-500/50 hover:text-rose-300 transition-colors">
                  {interest}
                </div>
              ))}
            </div>
          </section>
        )}



      </div>

      <ChatWidget />
    </main>
  );
}
