export const PORTFOLIO_DATA = {
  header: {
    name: "Shahzeb Siddiqui",
    title: "Software Engineer",
  },
  summary: "Results-driven Software Engineer with extensive experience in backend and full-stack development, specializing in microservice architecture and cloud infrastructure. Proven track record of leading high-impact projects, mentoring junior engineers, and migrating legacy systems to modern stacks.",
  experience: [
    {
      title: "Eventbrite | Software Engineer 2",
      duration: "July 2023 – Present | Remote",
      points: [
        { highlight: "Leadership & Mentorship:", text: "Mentored interns and SDE1 engineers through technical guidance and code reviews. Managed end-to-end project execution, including stakeholder management and release planning." },
        { highlight: "Legacy Migration:", text: "Led the phased migration of a monolithic legacy system to a modern Next.js stack using Edge-based computation for intelligent routing, achieving zero downtime." },
        { highlight: "Onboarding Optimization:", text: "Partnered with Data/Marketing teams to personalize onboarding, resulting in a 30% increase in high-quality lead generation." },
        { highlight: "Growth Engineering:", text: "Optimized mobile CTAs, boosting signup CTR by 18%. Automated sitemap generation and indexation logic for SEO." }
      ]
    },
    {
      title: "DLT Labs | Software Engineer",
      duration: "Oct. 2020 – July 2023 | Noida, India",
      points: [
        { highlight: "Microservices Development:", text: "Developed and deployed microservices for a flagship supply chain platform." },
        { highlight: "DevOps & Quality:", text: "Set up Docker containers for Jenkins and SonarQube. Built CI/CD pipelines to automate unit testing and code quality analysis." },
        { highlight: "Performance:", text: "Implemented an asynchronous version of the transaction API for asset transfer, significantly improving user experience." },
        { highlight: "Thought Leadership:", text: "Authored multiple technical articles on Kubernetes to promote orchestration technology within the organization." }
      ]
    }
  ],
  education: [
    {
      uni: "KIET Group of Institutions, Ghaziabad, India",
      degree: "Bachelor of Engineering in Computer Science and Engineering (2016 – 2020)",
      score: "8.0/10.0"
    },
    {
      uni: "Christ Church College, Lucknow, India",
      degree: "Class 12th (ISC)",
      score: "8.4/10"
    },
    {
      uni: "Christ Church College, Lucknow, India",
      degree: "Class 10th (ICSE)",
      score: "8.5/10"
    }
  ],
  skills: [
    {
      title: "Core Competencies",
      skillsList: [
        { name: "Languages", values: "Node.js, JavaScript, TypeScript, Python" },
        { name: "Backend", values: "Microservice Architecture, RESTful APIs, Serverless" },
        { name: "Frontend", values: "React.js, Next.js" }
      ]
    },
    {
      title: "Infrastructure & Cloud",
      skillsList: [
        { name: "AWS Services", values: "Lambda, API Gateway, ElastiCache, Secrets Manager, CloudWatch, EC2, CloudFront" },
        { name: "DevOps", values: "Git, Docker, Jenkins, SonarQube, IAAC, Kubernetes" },
        { name: "Monitoring", values: "Datadog, ELK Stack" }
      ]
    },
    {
      title: "Databases & Messaging",
      skillsList: [
        { name: "SQL/NoSQL", values: "Postgres, MySQL, DynamoDB, CouchDB, Redis" },
        { name: "Messaging", values: "Kafka" }
      ]
    },
    {
      title: "Tools & Others",
      skillsList: [
        { name: "CMS", values: "Contentful, Wagtail" },
        { name: "Testing/Documentation", values: "Postman, Unit Testing, Swagger" }
      ]
    }
  ],
  interests: [
    "Football",
    "Anime",
    "Urdu Poetry"
  ],
  projects: [
    { title: "Architected a scalable venue discovery solution enhancing top discovery capabilities for event creators." },
    { title: "Engineered a high-traffic platform serving millions daily, eliminating engineering dependencies and reducing launch times from days to minutes." },
    { title: "Developed an event-based multi-tenant asset aggregation service for tracking real-time product movement in supply chains." },
    { title: "Built a flagship blockchain-based platform for securely tracking and managing product and asset lifecycles." }
  ]
};
