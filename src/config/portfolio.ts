type ExpertiseIcon = "backend" | "cloud" | "devops" | "data" | "frontend";

export const portfolio = {
  email: "dariel.v.avila@gmail.com",
  github: "https://github.com/git-dariel",
  linkedin: "https://www.linkedin.com/in/darielavila",
  coreTechnologies: ["Node.js", "TypeScript", "AWS", "REST APIs", "Docker"],
  specializations: [
    {
      title: "Backend systems",
      description: "Business logic, service architecture, authentication, validation, and data flows built for change.",
    },
    {
      title: "API engineering",
      description: "Reliable REST interfaces and third-party integrations with consistent contracts and error handling.",
    },
    {
      title: "Cloud delivery",
      description: "Repeatable AWS deployments, infrastructure configuration, access control, and production troubleshooting.",
    },
  ],
  caseStudies: [
    {
      domain: "AWS / DevOps",
      title: "Enterprise AWS delivery environment",
      scope: "Sanitized enterprise work",
      summary:
        "Contribute to enterprise application delivery across source control, deployment pipelines, managed compute, storage, databases, and infrastructure configuration—without exposing client-specific topology or identifiers.",
      focus: [
        "Operate and troubleshoot application environments across EC2 and Elastic Beanstalk",
        "Support automated delivery from CodeCommit through CodePipeline",
        "Work with CloudFormation and IAM for repeatable, controlled infrastructure",
      ],
      technologies: ["EC2", "Elastic Beanstalk", "S3", "CodeCommit", "CodePipeline", "RDS", "CloudShell", "CloudFormation", "IAM"],
      outcome: "End-to-end",
      outcomeLabel: "source-to-production delivery visibility",
    },
    {
      domain: "Backend / API integration",
      title: "Extensible insurance platform APIs",
      scope: "Commercial platform",
      summary:
        "Developed and maintained the backend for a digital insurance platform, including a reusable calculation engine and third-party service integrations designed to support new products and operational workflows.",
      focus: [
        "Designed reusable APIs around insurance calculations and product rules",
        "Integrated external insurance services into operational dashboards",
        "Improved release consistency through containerized, automated delivery",
      ],
      technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Docker", "REST APIs"],
      outcome: "+45%",
      outcomeLabel: "reported increase in operational visibility",
    },
    {
      domain: "Full-stack / API platform",
      title: "Multi-market booking and content system",
      scope: "Commercial platform",
      summary:
        "Built backend APIs for class discovery, dynamic pricing, booking, availability, and administrator-managed content, supporting a consumer experience across multiple dance genres and international users.",
      focus: [
        "Created booking and availability APIs with clear domain boundaries",
        "Supported dynamic pricing behavior for international users",
        "Connected backend services to a responsive Next.js experience",
      ],
      technologies: ["Next.js", "Node.js", "Prisma", "MongoDB", "Docker", "Cloud Run"],
      outcome: "−50%",
      outcomeLabel: "reported reduction in manual admin work",
    },
  ],
  expertise: [
    {
      title: "Backend & APIs",
      label: "Core",
      icon: "backend" as ExpertiseIcon,
      description: "Application boundaries, reusable services, and predictable interfaces.",
      skills: ["Node.js", "Express.js", "Java", "REST APIs", "Authentication", "RBAC", "Validation", "Error handling", "API integration"],
    },
    {
      title: "AWS & Cloud",
      label: "Current focus",
      icon: "cloud" as ExpertiseIcon,
      description: "Cloud resources and operational workflows used in enterprise delivery.",
      skills: ["EC2", "Elastic Beanstalk", "S3", "RDS", "CloudShell", "CloudFormation", "IAM"],
    },
    {
      title: "DevOps & Delivery",
      label: "Operations",
      icon: "devops" as ExpertiseIcon,
      description: "Automation and environment practices that make releases repeatable.",
      skills: ["CodeCommit", "CodePipeline", "CI/CD", "Docker", "GitHub Actions", "Git", "Environment management", "Troubleshooting"],
    },
    {
      title: "Data & Persistence",
      label: "Systems",
      icon: "data" as ExpertiseIcon,
      description: "Data modeling and persistence choices that support application behavior.",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Firebase", "Supabase", "Database modeling"],
    },
    {
      title: "Frontend Integration",
      label: "Supporting",
      icon: "frontend" as ExpertiseIcon,
      description: "End-to-end product delivery when the interface must meet the API.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "API consumption"],
    },
  ],
  experience: [
    {
      role: "Advanced App Engineering Sr. Analyst",
      company: "Accenture",
      period: "Jul 2026 — Present",
      description:
        "Contribute to enterprise application engineering with a focus on AWS infrastructure, deployment workflows, application support, environment operations, and collaboration across engineering teams. All client and system details remain confidential.",
      tags: ["AWS", "Enterprise", "DevOps", "Delivery"],
    },
    {
      role: "Software Developer",
      company: "Filipino Trusted Care Center",
      period: "Aug 2025 — Jul 2026",
      description:
        "Managed and enhanced an electronic medical records platform, maintaining its API architecture, healthcare service integrations, deployment environments, and day-to-day system reliability.",
      tags: ["Healthcare", "APIs", "Heroku", "Reliability"],
    },
    {
      role: "Software Backend Engineer",
      company: "Illustrados Creatives & Technology · Freelance",
      period: "Jun 2025 — Feb 2026",
      description:
        "Built backend systems for insurance and booking platforms, designed reusable APIs, integrated external services, and established containerized CI/CD workflows for cloud deployment.",
      tags: ["Node.js", "Docker", "GCP", "Integrations"],
    },
    {
      role: "Technology Developer",
      company: "Trifecta Solutions Inc.",
      period: "Apr 2024 — Jun 2025",
      description:
        "Led backend work across ERP, loyalty, e-commerce, microfinance, and real-estate systems. Also mentored 15 junior developers in API design, database optimization, and engineering practices.",
      tags: ["Backend", "Leadership", "MongoDB", "Architecture"],
    },
  ],
  highlights: [
    { value: "15", label: "Junior developers mentored" },
    { value: "39", label: "Public GitHub repositories" },
    { value: "7+", label: "Business domains delivered" },
    { value: "9", label: "AWS services in current workflow" },
  ],
  repositories: [
    {
      name: "postgre-api-template",
      url: "https://github.com/git-dariel/postgre-api-template",
      language: "TypeScript",
      description: "A layered Express, PostgreSQL, and Prisma starter with validation, logging, and error handling.",
    },
    {
      name: "bluetalk",
      url: "https://github.com/git-dariel/bluetalk",
      language: "Dart",
      description: "An offline peer-to-peer messaging app focused on clean architecture and security hardening.",
    },
    {
      name: "mongo",
      url: "https://github.com/git-dariel/mongo",
      language: "TypeScript",
      description: "A scalable MongoDB template built with Express.js and TypeScript for modern web applications.",
    },
  ],
} as const;
