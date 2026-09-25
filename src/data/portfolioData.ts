export interface Project {
  id: string;
  title: string;
  category: "Hackathon & Platform" | "System Utility" | "Data & Analysis" | "Academic Programming";
  tagline: string;
  description: string;
  context: string;
  myRole: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  badge?: string;
  highlights?: string[];
  metrics?: string;
  accentColor?: string;
  sourceNotice?: string;
}

export interface Involvement {
  id: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
  skillsApplied: string[];
  image?: string;
  imageAlt?: string;
  caption?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  summary: string;
  proofType: "certificate_image" | "certificate_pdf" | "badge";
  assetPath?: string;
  details: string;
  tag: string;
}

export const PERSONAL_INFO = {
  name: "Eyad El Bohy",
  legalName: "Eyad Ahmed Mohamed Roshdi Khaled Elbohy",
  headline: "Computer Engineering Student & Curious Builder",
  subheading:
    "Exploring data engineering, systems, and workflow automation. Based in Cairo, studying at Egypt University of Informatics.",
  location: "Cairo, Egypt",
  university: "Egypt University of Informatics (EUI)",
  faculty: "Faculty of Engineering",
  degree: "B.E. Computer Engineering",
  expectedGraduation: 2030,
  gpa: {
    cumulative: "3.85",
    fall2025: "3.93",
    scale: "4.0",
  },
  contacts: {
    email: "eyadar2007@gmail.com",
    github: "https://github.com/eyad-ahmed7",
  },
  manifesto: [
    "I like figuring things out.",
    "I am early in my university journey, and I treat code not as an isolated discipline, but as a lever to solve real problems, organize ideas, and build things with ambitious people.",
  ],
  interests: [
    "Exploring new systems",
    "Data engineering & analytics",
    "Workflow automation",
    "Field photography & travel",
    "Collaborative events",
  ],
  coursework: [
    "Calculus I",
    "Calculus II",
    "Mechanics",
    "Electric & Magnetic Interactions",
    "Introduction to Programming in C",
  ],
};

export const FEATURED_PROJECT: Project = {
  id: "keheilan",
  title: "Keheilan",
  category: "Hackathon & Platform",
  tagline: "Agricultural Fractional-Investment Platform",
  description:
    "An AI-augmented platform concept designed to empower smallholder agriculture through fractional capital pooling, risk classification, and localized monitoring.",
  context:
    "Built for the GDG on Campus EUI AI Sprint Hackathon in May 2026, competing against teams across university campuses.",
  myRole:
    "Core team contributor across project ideation, team organization, and engineering the n8n-based AI email automation component for investor workflow communication.",
  technologies: [
    "AI Workflow / n8n",
    "System Ideation",
    "Risk Profiling",
    "Voice-to-Text Pipeline",
    "Team Coordination",
  ],
  badge: "1st Place of 53 Teams",
  metrics: "Awarded top honor among 53 competing teams",
  highlights: [
    "Investor risk profiling and automated deal scoring",
    "Agricultural project viability checks and revenue anomaly detection",
    "Arabic farmer voice-to-text update ingestion for real-time field reporting",
    "Automated investor communication pipeline via n8n integration",
  ],
  sourceNotice: "Team hackathon project — GDG EUI AI Sprint 2026",
};

export const PROJECTS: Project[] = [
  {
    id: "smart-file-organizer",
    title: "Smart File Organizer",
    category: "System Utility",
    tagline: "Intelligent local filesystem automation tool",
    description:
      "A pragmatic Python automation script that parses file metadata, dynamically classifies extensions, handles duplicate collision resolution, and cleans empty directories.",
    context:
      "Created to automate personal local workspace hygiene and handle chaotic download directories.",
    myRole: "Designed and implemented from scratch using Python's standard library.",
    technologies: ["Python", "pathlib", "os", "shutil", "File I/O"],
    image: "/assets/file_organizer-ss-projects.jpg",
    imageAlt: "Actual VSCode Python source code of the Smart File Organizer script",
    highlights: [
      "Dynamic path resolution and collision handling using counter suffixes",
      "Recursive directory cleanup for empty leftover folders",
      "Robust error handling for locked and in-use system files",
    ],
  },
  {
    id: "eda-practice",
    title: "Data & EDA Practice",
    category: "Data & Analysis",
    tagline: "Exploratory analysis on real-world multi-dimensional datasets",
    description:
      "Focused learning experiments conducting data cleaning, outlier trimming, correlation analysis, and visualization on real datasets including Egypt electricity consumption metrics and Airbnb market listings.",
    context:
      "Hands-on exploratory data analysis practice to build intuition in data transformations and visualization.",
    myRole: "Data wrangling, cleaning pipeline, statistical summaries, and Matplotlib plotting.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Cleaning", "EDA"],
    image: "/assets/airbnb-scatterplot-ss-projects.jpg",
    imageAlt: "Actual Jupyter/VSCode scatterplot output showing Airbnb host listings vs price",
    highlights: [
      "Exploratory scatter plot analysis between calculated host listings count and unit pricing",
      "Handling missing values and skewed distributions in housing and energy datasets",
      "Visual pattern discovery using tailored Matplotlib scatter and distribution plots",
    ],
  },
  {
    id: "c-exam-management",
    title: "C Exam Management System",
    category: "Academic Programming",
    tagline: "Structured academic examination and record administration in C",
    description:
      "A structured terminal-based academic management utility built in C, managing student examination enrollments, record indexing, seating distributions, and grade allocations.",
    context:
      "University programming curriculum project emphasizing low-level memory layout, pointer mechanics, and robust file persistence.",
    myRole: "Structured program design, memory allocation, struct architecture, and CLI flow.",
    technologies: ["C", "Memory Management", "File Streams", "Pointers", "Struct Data Modeling"],
    highlights: [
      "Engineered without higher-level runtime abstractions using pure C standard library",
      "Sequential file I/O for persistent student exam registries",
      "Focus on pointer arithmetic, struct modeling, and boundary validation",
    ],
  },
  {
    id: "student-grade-manager",
    title: "Student Grade Manager",
    category: "System Utility",
    tagline: "Python CLI utility for weighted GPA and grade bookkeeping",
    description:
      "A clean command-line student performance tracking tool that calculates weighted GPA scales, categorizes percentile ranks, and generates formatted terminal progress reports.",
    context: "Personal utility built while exploring modular Python scripting and structured input validation.",
    myRole: "Independent project design and implementation.",
    technologies: ["Python", "CLI Design", "Data Structures", "Input Validation"],
    highlights: [
      "Weighted GPA calculation algorithms across diverse semester credit loads",
      "Interactive command-driven terminal menu with validation guards",
    ],
  },
  {
    id: "personal-expense-tracker",
    title: "Personal Expense Tracker",
    category: "System Utility",
    tagline: "Categorized cash-flow ledger and monthly breakdown tool",
    description:
      "A lightweight Python ledger to log, tag, categorize, and calculate expenditure breakdowns across spending streams with summary statistics.",
    context: "Practical utility built to practice data modeling and local persistence in Python.",
    myRole: "Independent development and testing.",
    technologies: ["Python", "CSV Persistence", "Data Filtering", "Terminal UI"],
    highlights: [
      "Category-based expense tagging and monthly rollups",
      "CSV-backed data persistence allowing inspection in spreadsheet tools",
    ],
  },
];

export const INVOLVEMENTS: Involvement[] = [
  {
    id: "the-exchange-eui",
    organization: "The Exchange @ EUI",
    role: "Vice Head — Organising Committee",
    period: "Ongoing",
    summary:
      "Leading organizational workflows and the Automation & Communication team to streamline student club logistics, participant communications, and event operations.",
    details: [
      "Built automated registration and notification workflows integrating Google Forms, Sheets, and Google Apps Script",
      "Coordinated cross-functional student teams across multi-week initiatives and member engagements",
      "Streamlined club communication dispatch pipelines, reducing manual administrative overhead",
    ],
    skillsApplied: ["Google Apps Script", "Workflow Automation", "Team Leadership", "Operations"],
  },
  {
    id: "ieee-eui",
    organization: "IEEE EUI Student Branch",
    role: "PR Member",
    period: "Since June 2026",
    summary:
      "Driving public relations, attendee onboarding, and logistical event flow for major engineering and computing community events at EUI.",
    details: [
      "Supported event flow and public relations for high-impact gatherings including WIE Day, EOCS 2026, BridgeX, and AI Catalyst",
      "Served as EduGate Student Ambassador representing EUI to prospective engineers and tech aspirants",
      "Cultivated active collaboration across organizing teams, attendees, and technical guest speakers",
    ],
    skillsApplied: ["Public Relations", "Event Management", "Communication", "Community Engagement"],
    image: "/assets/IEEE-experience.jpeg",
    imageAlt: "Eyad and the IEEE EUI Student Branch team at the BridgeX event backdrop",
    caption: "With the IEEE EUI Student Branch team at the BridgeX campus summit.",
  },
  {
    id: "gdg-eui",
    organization: "GDG on Campus EUI",
    role: "Events Management Member",
    period: "Since April 2026",
    summary:
      "Contributing to developer community growth through hands-on technical hackathons and workshop logistics, including the flagship AI Sprint.",
    details: [
      "Assisted in coordinating the 53-team AI Sprint Hackathon operations, stage logistics, and participant check-ins",
      "Awarded official Certificate of Recognition for dedication and contributions during the 2025–2026 term",
      "Engaged in technical knowledge exchange sessions bridging engineering students and developer ecosystems",
    ],
    skillsApplied: ["Event Operations", "Community Building", "Hackathon Organization"],
    image: "/assets/GDG_25-26-experrience.jpg",
    imageAlt: "Official GDG EUI Certificate awarded to Eyad Ahmed for contributions in 2025-2026",
    caption: "Official Certificate of Appreciation — Google Developer Groups EUI (May 2026).",
  },
  {
    id: "tedx-experience",
    organization: "TEDx Youth / University",
    role: "Event Crew & Logistics Contributor",
    period: "2025 – 2026",
    summary:
      "Participating in on-ground staging, speaker handling, and audience experience coordination for high-production storytelling and ideas conferences.",
    details: [
      "Supported backstage operations and attendee welcoming at TEDx events",
      "Hands-on exposure to large-scale stage production, timing precision, and rapid contingency solving",
    ],
    skillsApplied: ["Live Production Flow", "Logistics", "Problem Solving"],
    image: "/assets/tedx-experience.jpeg",
    imageAlt: "Eyad standing with the TEDx stage letters during event preparations",
    caption: "On-site with the iconic TEDx letters during event staging.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hackathon-1st",
    title: "1st Place Winner (53 Teams)",
    organization: "GDG on Campus EUI AI Sprint Hackathon",
    date: "May 2026",
    summary:
      "Awarded first place among 53 participating teams for project 'Keheilan', recognized for agricultural AI impact and feasibility.",
    proofType: "badge",
    details:
      "Evaluated across technical feasibility, innovative AI integration, and pitch clarity in a competitive multi-university sprint.",
    tag: "Competition",
  },
  {
    id: "deans-list",
    title: "Dean's List of Academic Excellence",
    organization: "Faculty of Engineering, Egypt University of Informatics",
    date: "Fall 2025 Semester (Awarded Feb 2026)",
    summary:
      "Placed on the Dean's List for outstanding academic performance, achieving a 3.93 semester GPA and maintaining a 3.85 cumulative GPA.",
    proofType: "certificate_image",
    assetPath: "/assets/Dean's_list_fall25-achievments.png",
    details:
      "Signed by Prof. Ashraf Mahran, Dean of the Faculty of Engineering, acknowledging top academic tier standing.",
    tag: "Academics",
  },
  {
    id: "mckinsey-forward",
    title: "Accepted Participant — McKinsey Forward",
    organization: "McKinsey & Company",
    date: "2026",
    summary:
      "Selected for McKinsey's global flagship learning initiative focusing on digital mindset, structured problem-solving, and adaptability.",
    proofType: "badge",
    details:
      "Rigorous learning modules covering strategic thinking, emotional intelligence, and digital transformation paradigms.",
    tag: "Leadership & Learning",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages & Core",
    subtitle: "What I write logic in",
    items: [
      { name: "C", note: "Pointers, memory layout, structured programming in coursework" },
      { name: "Python", note: "Primary language for automation scripts, data wrangling & tools" },
    ],
  },
  {
    name: "Data & Analysis",
    subtitle: "Exploring patterns and distributions",
    items: [
      { name: "Pandas", note: "Dataframes, filtering, aggregation, and transformations" },
      { name: "NumPy", note: "Numerical vectors, arrays, and mathematical operations" },
      { name: "Matplotlib", note: "Custom scatter plots, trend distributions, visual analysis" },
      { name: "Data Cleaning & EDA", note: "Detecting missing values, trimming outliers, data health" },
    ],
  },
  {
    name: "Automation & Workflows",
    subtitle: "Eliminating manual friction",
    items: [
      { name: "Google Apps Script", note: "Custom macros, form processing, automated club emails" },
      { name: "Google Sheets", note: "Advanced formulas, relational lookups, pipeline tracking" },
      { name: "n8n", note: "Exploring webhook-driven AI email workflows (early / targeted usage)" },
    ],
  },
  {
    name: "Communication & Office",
    subtitle: "Presenting and documenting ideas",
    items: [
      { name: "PowerPoint", note: "Structured slide decks for hackathons and club meetings" },
      { name: "Gamma", note: "AI-assisted interactive presentations and visual documents" },
      { name: "Word", note: "Technical documentation, academic reports, and briefings" },
    ],
  },
];

export const EXPLORATION_DOMAINS = [
  {
    domain: "Data Engineering",
    status: "Exploring",
    description: "Understanding data pipelines, ETL patterns, and structured data flow.",
  },
  {
    domain: "Data Analysis",
    status: "Practicing",
    description: "Extracting actionable stories from messy tabular datasets using Python.",
  },
  {
    domain: "Backend Systems",
    status: "Exploring",
    description: "API design, HTTP interactions, and structured data persistence.",
  },
  {
    domain: "Embedded Systems",
    status: "Coursework & Curiosity",
    description: "Bridging physical computing, digital logic, and low-level C programming.",
  },
  {
    domain: "Automation & Workflows",
    status: "Active Building",
    description: "Connecting disparate tools with scripts and webhooks to save human time.",
  },
  {
    domain: "Machine Learning",
    status: "Learning",
    description: "Studying core algorithmic principles and practical AI pipeline integrations.",
  },
];
