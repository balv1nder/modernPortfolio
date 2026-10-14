export const navItems = [
  { name: "About", link: "#about" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "MSc Artificial Intelligence student at CentraleSupélec, Paris. Before that, 1.5+ years at OYO building backend services and internal tools for hotels across Europe, the UK, the USA and the UAE. Co-author of two IEEE papers applying LLMs, RAG and machine learning to healthcare and cybersecurity.",
    description: "About Me",
    descClassName:
      "lg:mt-0 lg:font-bold lg:mb-5 lg:text-4xl text-3xl mt-2 mb-3 font-bold font-sans",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] w-full",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center text-center lg:mb-6",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Shipping backend systems across four continents.",
    description: "",
    descClassName: "font-extralight text-sm md:text-sx lg:text-base",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-center items-center ",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "What I build with",
    descClassName: "font-extralight text-sm md:text-sx lg:text-base",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center ",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I measure before I optimise. Then I measure again.",
    description: "",
    descClassName: "font-extralight text-sm md:text-sx lg:text-base",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start ",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently going deep on applied AI systems, backend architecture and the infrastructure that holds them up.",
    description: "The Inside Scoop",
    descClassName: "font-extralight text-sm md:text-sx lg:text-base",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center ",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to build something together?",
    description: "",
    descClassName: "font-extralight text-sm md:text-sx lg:text-base",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center ",
    img: "",
    spareImg: "",
  },
];

// Rendered on the bento "My tech stack" tile, two scrolling columns.
export const techStack = {
  left: ["Go", "Java", "Python", "Spring Boot"],
  right: ["Redis", "PostgreSQL", "Docker", "AWS"],
};

export const projects = [
   {
    id: 1,
    title: "AgentAudit — auditable LLM agent for financial queries",
    des: "A Spring AI agent over a locally hosted LLM that answers portfolio-risk questions by invoking Java tools, with every run persisted to PostgreSQL as a session plus an ordered event log of tool calls, arguments and results, each correlated to its OpenTelemetry trace.",
    highlights: [
      "Recorded every tool call with its arguments and result; a data-not-found case returns HTTP 200 while the record shows the underlying TOOL_ERROR.",
      "Caught the model asserting EUR 12M was higher than EUR 14M, reproducibly at temperature 0; the record isolated the fault to narration, not data.",
      "Measured a prompt-based fix over three runs per arm: it did not correct the answer and added a tool round, visible only in the audit trail.",
    ],
    stack: ["Java", "Spring Boot", "Spring AI", "PostgreSQL", "OpenTelemetry", "Ollama"],
    date: "Oct 2026",
    link: "https://github.com/balv1nder/agent-audit",
  },
  {
    id: 2,
    title: "Pulse — distributed, rate-limited API service",
    des: "A horizontally scaled Go service: custom round-robin load balancer with health checks, three stateless API replicas, a distributed rate limiter backed by an atomic Redis Lua script and a cache-aside layer, all wired to Prometheus.",
    highlights: [
      "Load-tested with k6: p99 of 8 ms at 1,500 req/s before degradation.",
      "Identified the load balancer — not the replicas — as the shared bottleneck; adding replicas moved throughput by only 2%.",
      "Diagnosed a cascading failure where health-check timeouts under overload made the LB eject healthy backends, returning 503s to 2.5% of requests.",
    ],
    stack: ["Go", "Redis", "Docker", "Prometheus", "k6"],
    date: "Oct 2026",
    link: "https://github.com/balv1nder/pulse",
  },
  {
    id: 3,
    title: "Nord Buds 4 Pro — ANC control for macOS",
    des: "Reverse-engineered the OnePlus Nord Buds 4 Pro BLE protocol to switch ANC, Transparency and Off from macOS without the HeyMelody app.",
    highlights: [
      "Swift CoreBluetooth client with optimised service discovery: ~0.5 s mode switches.",
      "CLI that handles macOS TCC/privacy correctly, plus a Python PyObjC RFCOMM fallback for Bluetooth Classic.",
      "Raycast script commands for one-hotkey toggling.",
    ],
    stack: ["Swift", "CoreBluetooth", "Python", "Bash"],
    date: "2026",
    link: "https://github.com/balv1nder/Cracked-Oneplus_NordBuds4Pro",
  },
];

export const publications = [
  {
    id: 1,
    title: "LLM-based clinical decision support",
    venue: "IEEE ICDLT",
    note: "Paper presented · Google AI for Impact Finalist",
    date: "Nov 2025",
    des: "A hybrid RAG pipeline (AWS Textract OCR → BioBERT embeddings in Pinecone → Gemini 1.5) for differential-diagnosis support, using dual-persona prompting and rolling summarisation to fit long patient histories in context.",
  },
  {
    id: 2,
    title: "Botnet attack detection for IoT devices",
    venue: "IEEE TENSYMP",
    note: "Paper presented",
    date: "Sep 2024",
    des: "A stacking ensemble with time-window feature engineering on N-BaIoT, classifying Mirai and BASHLITE attacks on low-resource devices at 99.98% binary accuracy.",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "OYO (Oravel Stays)",
    location: "Gurugram, India",
    roles: [
      {
        title: "Associate Software Development Engineer",
        period: "Aug 2025 – Sep 2026",
        points: [
          "Designed and deployed backend REST APIs for automated smart-lock and room-upsell products in the UK and UAE, streamlining check-in and contributing to a 15% increase in property revenue.",
          "Built an end-to-end digital check-in system replacing front-desk check-in with a self-service guest flow; projected operational savings of over $1M per year.",
          "Developed in-house dashboards for the Motel 6 management system, reducing operational cost and improving reliability. Team Building Block Award for supporting the Motel 6 (USA) acquisition, and for handling critical on-call issues.",
        ],
      },
      {
        title: "Software Engineering Intern",
        period: "Jan 2025 – Jul 2025",
        points: [
          "Led projects to streamline hotel onboarding and financial contracting on the OYO 360 platform for 1,000+ hotels across Europe (Belvilla, DanCenter, CheckMyGuest); improved operational efficiency by 30%.",
          "Owned month-end closure and year-end audit for merchant payouts across several countries, ensuring accurate settlement and reconciliation.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Mahindra Logistics (Mahindra Group)",
    location: "Mumbai, India",
    roles: [
      {
        title: "Information Technology Intern",
        period: "Feb 2024 – Apr 2024",
        points: [
          "Cut API response time from 50+ s to ~500 ms (100× faster) on the LogiPulse KPI-monitoring system by adding Redis caching, optimising SQL queries and redesigning the APIs.",
          "Redesigned the operator interface, reducing task time by ~80%; 1st among 200+ teams at the National Catapult Techathon, for KPI workflows now used across 1,000+ warehouses.",
        ],
      },
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "MSc in Artificial Intelligence (M2, 60 ECTS)",
    school: "CentraleSupélec — Université Paris-Saclay",
    period: "Sep 2026 – Dec 2027",
    detail:
      "Big data for AI, multi-agent systems, deep learning, trustworthy and explainable AI.",
  },
  {
    id: 2,
    degree: "B.Tech in Computer Science & Engineering (AI)",
    school: "Netaji Subhas University of Technology",
    period: "Dec 2021 – Dec 2025",
    detail:
      "CGPA 7.58/10. Distributed Computing, Operating Systems, DBMS, Data Structures & Algorithms.",
  },
];

export const skills = [
  { label: "Languages", items: "Java, Python, C++, SQL, Go, JavaScript" },
  {
    label: "Backend & data",
    items:
      "REST APIs, Microservices, Spring Boot, ActiveMQ, Redis, PostgreSQL, MySQL, MongoDB",
  },
  {
    label: "Infra & observability",
    items: "Docker, Kubernetes, AWS, Prometheus, Git",
  },
  {
    label: "AI / ML",
    items:
      "Machine Learning, Deep Learning, NLP, LLMs, RAG, Pinecone, AI coding assistants",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/balv1nder",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.x.com/balvind3rsingh/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/balvind3rsingh/",
  },
];
