export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: 'red' | 'yellow' | 'pink' | 'cream';
  techStack: string[];
  features: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  badgeText?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string[];
  skills: string[];
  badgeColor?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  tag: string;
  credentialUrl?: string;
  badgeColor?: 'yellow' | 'pink' | 'red' | 'cream' | 'white';
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badgeText: string;
  badgeColor: 'red' | 'yellow' | 'pink' | 'white';
  date?: string;
  iconName?: string;
}


export interface SkillCategory {
  title: string;
  icon: string;
  accent: 'red' | 'yellow' | 'pink' | 'cream';
  skills: { name: string; tag?: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    accent: 'red',
    skills: [
      { name: 'Java', tag: 'Core' },
      { name: 'Python', tag: 'AI/ML' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'JavaScript', tag: 'ES6+' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    accent: 'pink',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React', tag: 'Modern' },
      { name: 'Bootstrap' },
      { name: 'Material UI' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    accent: 'yellow',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Flask' },
      { name: 'FastAPI' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    accent: 'cream',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    title: 'AI / ML',
    icon: 'cpu',
    accent: 'red',
    skills: [
      { name: 'Python' },
      { name: 'Machine Learning' },
      { name: 'Generative AI' },
      { name: 'Data Analysis' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'wrench',
    accent: 'yellow',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'hungrify',
    name: 'Hungrify',
    tagline: 'Full-stack food delivery platform for restaurant discovery & ordering',
    description: 'Full-stack food delivery platform focused on restaurant discovery, menu browsing, cart management, ordering, reviews, and coupons.',
    accentColor: 'pink',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'REST API'],
    features: [
      'Restaurant discovery & catalog menu browsing',
      'Dynamic shopping cart with real-time state management',
      'Order processing, user reviews & coupon application engine',
      'RESTful API backend for restaurant & inventory logistics'
    ],
    githubUrl: 'https://github.com/chhavss/Hungrify',
    liveUrl: 'https://hungrify.vercel.app',
    badgeText: 'FULL STACK'
  },
  {
    id: 'skyweave',
    name: 'SKYWEAVE',
    tagline: 'Graph-based airline route planner analyzing optimal flight paths',
    description: 'Graph-based airline route planner that analyzes optimal routes between airports using Dijkstra, Prim\'s MST, BFS, and DFS.',
    accentColor: 'cyan',
    techStack: ['Java', 'Graph DSA', 'Dijkstra', 'React', 'Express', 'MySQL'],
    features: [
      'Shortest route optimization using Dijkstra\'s algorithm',
      'Minimum Spanning Tree (MST) network cost optimization via Prim\'s',
      'Interactive route visualization with BFS & DFS graph pathfinders',
      'Real-time flight schedule & pricing calculation engine'
    ],
    githubUrl: 'https://github.com/chhavss/SkyWeave',
    liveUrl: 'https://skyweave-demo.vercel.app',
    badgeText: 'GRAPH DSA'
  },
  {
    id: 'neuronote',
    name: 'NeuroNote',
    tagline: 'MERN-based intelligent note management & productivity workspace',
    description: 'MERN-based intelligent note management application designed to organize information and improve productivity with AI-powered functionality.',
    accentColor: 'yellow',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AI APIs', 'CSS Modules'],
    features: [
      'AI-powered note summarization and cognitive organization',
      'Rich markdown text previewer with instant search',
      'Structured knowledge organization with tag hierarchies',
      'Local-first persistent workspace storage'
    ],
    githubUrl: 'https://github.com/chhavss/NeuroNote',
    liveUrl: 'https://neuronote.vercel.app',
    badgeText: 'PRODUCTIVITY'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'gssoc',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC)',
    period: '2025 - Present',
    description: [
      'Contributed code fixes, feature additions, and documentation updates across major open-source web repositories.',
      'Collaborated with project maintainers and global developer communities using Git & GitHub workflows.',
      'Reviewed pull requests and assisted peers with algorithmic and frontend component optimizations.'
    ],
    skills: ['Git', 'GitHub', 'React', 'Open Source', 'Code Review'],
    badgeColor: 'sticker-red'
  },
  {
    id: 'WebDev-intern',
    role: 'Web Development Intern',
    organization: 'Inamigos Foundation',
    period: '2024[remote]',
    description: [
      'Assisted in building responsive React frontends integrated with RESTful Python FastAPI backends in a collaborative development environment..',
      'Collaborated with mentors and fellow developers using Git and GitHub, contributing to feature development,debugging, testing, and code integration.',
      'Designed custom CSS component layouts complying with accessible and performant UI standards.'
    ],
    skills: ['Javascript', 'FastAPI', 'React', 'CSS3', 'REST APIs'],
    badgeColor: 'sticker-yellow'
  },

];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ai-skills-passport',
    title: 'AI Skills Passport offered by EY and Microsoft',
    issuer: 'Microsoft',
    year: '2026',
    tag: 'AI',
    credentialUrl: 'https://www.linkedin.com/in/chhavi-31418231b/overlay/Certifications/1617262883/treasury/?profileId=ACoAAFEBU0AB75vUxia0S6gHyP9H-vgqJqpmOCA',
    badgeColor: 'red'
  },
  {
    id: 'ms-learn-ai-genai',
    title: 'Microsoft Learn AI and Generative AI',
    issuer: 'Microsoft',
    year: '2026',
    tag: 'Generative AI',
    credentialUrl: 'https://www.linkedin.com/in/chhavi-31418231b/overlay/Certifications/1620459697/treasury/?profileId=ACoAAFEBU0AB75vUxia0S6gHyP9H-vgqJqpmOCA',
    badgeColor: 'yellow'
  },
  {
    id: 'google-dev-program',
    title: 'Google Developer Program',
    issuer: 'Google',
    year: '2026',
    tag: 'Developer',
    credentialUrl: 'https://www.linkedin.com/in/chhavi-31418231b/overlay/Certifications/1620408032/treasury/?profileId=ACoAAFEBU0AB75vUxia0S6gHyP9H-vgqJqpmOCA',
    badgeColor: 'pink'
  },
  {
    id: 'celonis-ai-foundation',
    title: 'Celonis AI Foundation',
    issuer: 'Celonis',
    year: '2026',
    tag: 'AI',
    credentialUrl: 'https://www.linkedin.com/in/chhavi-31418231b/overlay/Certifications/1620113033/treasury/?profileId=ACoAAFEBU0AB75vUxia0S6gHyP9H-vgqJqpmOCA',
    badgeColor: 'cream'
  },
  {
    id: 'nptel-iit-roorkee-data-analytics',
    title: 'Data Analytics Course Completion',
    issuer: 'IIT Roorkee (NPTEL)',
    year: '2026',
    tag: 'Data Analytics',
    badgeColor: 'yellow'
  },
  {
    id: 'shefi-season-16-scholar',
    title: 'Scholar — SheFi Season 16',
    issuer: 'SheFi',
    year: '2026',
    tag: 'Web3 & DeFi',
    credentialUrl: 'https://www.linkedin.com/in/chhavi-31418231b/overlay/Position/2844042962/treasury/?profileId=ACoAAFEBU0AB75vUxia0S6gHyP9H-vgqJqpmOCA',
    badgeColor: 'pink'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'cp-dsa',
    title: 'Data Structures & Algorithms',
    category: 'Competitive Programming',
    description: 'Solved 300+ algorithmic problems across LeetCode and platforms in Java & C++, focusing on Dynamic Programming, Graphs, and Trees.',
    badgeText: 'PROBLEM SOLVER',
    badgeColor: 'red'
  },
  {
    id: 'jpm-cert',
    title: 'Software Engineering Simulation',
    category: 'JPMorganChase & Co.',
    description: 'Completed hands-on simulation covering financial data streams, stock price monitoring charts, and open-source Perspective tools.',
    badgeText: 'CERTIFIED',
    badgeColor: 'yellow'
  },
  {
    id: 'gssoc-badge',
    title: 'Open Source Advocate',
    category: 'Community Contribution',
    description: 'Active contributor to GirlScript Summer of Code, resolving frontend bug tickets and enhancing documentation.',
    badgeText: 'OPEN SOURCE',
    badgeColor: 'pink'
  },
  {
    id: 'academic-excellence',
    title: 'B.Tech CSE Academic Focus',
    category: 'Maharaja Surajmal Institute of Technology',
    description: 'Maintained consistently strong performance in core CSE subjects including OS, DBMS, Computer Networks, and AI.',
    badgeText: 'LEARNER',
    badgeColor: 'white'
  }
];

export const EDUCATION_DATA = {
  degree: 'B.Tech — Computer Science & Engineering',
  institution: 'Maharaja Surajmal Institute of Technology (MSIT), Delhi',
  year: '2024 - 2028',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java/C++)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'Artificial Intelligence & ML Basics',
    'Web Technologies'
  ]
};

export const SOCIAL_LINKS = {
  email: 'mailto:thechhavi13@gmail.com',
  phoneDisplay: '+91 8101081616',
  phoneCall: 'tel:+918101081616',
  github: 'https://github.com/chhavss',
  linkedin: 'https://www.linkedin.com/in/chhavi-31418231b/',
  leetcode: 'https://leetcode.com/u/chhavss',
  resume: '/CR.pdf'
};
