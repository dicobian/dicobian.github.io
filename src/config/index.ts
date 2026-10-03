import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ahmad Habib - Web & Cloud",
  author: "Ahmad Habib",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/ahmad-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ahmad Habib Afif",
    specialty: "Web Developer & IT Support",
    summary:
      "Web Developer & IT Support Specialist based in Jakarta, Indonesia. I specialize in Laravel web app development and IT support.",
    email: "dirosah.ilmahdi@gmail.com",
  },
  experience: [
    {
      company: "Anaheim Nimbus Universal",
      position: "QA Enggineer",
      startDate: "April 2026",
      endDate: "June 2026",
      summary: [
        "Cloud Migration Testing: Executed Factory User Testing (FUT) for a large-scale infrastructure migration from On-Premise servers to a Modern Cloud environment.",
        "Data Integrity Validation: Validated downstream data flow to ensure complex datasets from Business Intelligence (BI) were accurately transmitted and consumed by target applications.",
        "Cross-Functional Collaboration: Conducted end-to-end data verification in collaboration with internal Telkomsigma and Telkomsel teams to identify and resolve synchronization issues during the cloud transition phase.",
      ],
    },
    {
      company: "Isolutions Indonesia",
      position: "IT Staff",
      startDate: "November 2023",
      endDate: "November 2025",
      summary: [
        `Infrastructure & Network Management: Performed hardware installation and maintenance (PCs, Servers, Printers) and
          redesigned physical network topology across multiple floors using MikroTik RB750R2 routers and switches to expand
          broadcast domains.`,
        
        `System Administration: Implemented a zero-trust network solution utilizing Tailscale to provide secure remote access to
          local enterprise servers without requiring a Public IP.`,

        `Application Development & Support: Managed the end-to-end development lifecycle of 4 internal operational web
          applications (Job Portal, Task Management, Project Documentation, and Event Registration) using the Laravel framework.`,

        `Server Deployment: Handled web application deployments to Windows-based production servers (XAMPP) and external
          hosting (Hostinger/cPanel) via SSH, including SMTP Email notification configurations and HTTPS security certificates via
          Cloudflare.`,

        `End-User Technical Support: Resolved daily technical incidents both remotely and on-site, including network issue
          isolation (IP conflicts, Gateway errors), Windows & macOS optimization, and post-incident hardware replacement and
          recovery.`

      ],
    },
  ],
  projects: [
    {
      name: "Azzahra System",
      summary: "ERP system for school, for maintain financial and student database",
      stackTechnology: ["Laravel", "Filament", "Postgre SQL"],
      linkPreview: "/",
      linkSource: "",
      image: "/azzahra-system.png",
    },
  ],
  about: {
    description: `
    Hi, I’m an IT Operations & Support Specialist with a strong passion for maintaining robust infrastructure and building efficient digital solutions.
    With over 2 years of hands-on experience in managing hardware, local networks, and providing technical support, I also bring added value through full-stack web development (Laravel) and enterprise-scale cloud migration testing (FUT).
    I thrive at the intersection of reliable IT operations and modern web development.
    `,
    image: "/ahmad-big.png",
  },
};

// #5755ff
