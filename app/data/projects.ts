export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
  gradient: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "Contesthub",
    name: "Contesthub",
    image: "/Screenshot 2026-03-02 105808.png",
    tagline: "A Hub Where Everyone Joins the Contest Journey",
    description:
      "ContestHub is a collaborative platform where creators launch contests, admins approve them, and users join to compete. With role-based dashboards and secure flows, it makes organizing and participating in contests simple and engaging.",
    techStack: ["Node.js", "MongoDB","React", "JavaScript",  "Tailwind CSS","Netlify"],
    liveLink: "https://roaring-bubblegum-26fe9c.netlify.app",
    githubLink: "https://github.com/mehedihasanv/final-project-client",
    challenges:
      "role separation, secure approval, conditional access, data integration, scalability, UI polish",
    improvements: " analytics, integrations, scalability, security",
    gradient: "from-amber-500/20 via-orange-600/20 to-red-500/20",
  },
  {
    id: "Homenest",
    name: "Homenest",
    image: "/Screenshot 2026-03-02 110303.png",
    tagline: "A real estate buy-sell platform",
    description:
      "A platform where user can buy property and also can sell their property ",
    techStack: ["Node.js","React", "JavaScript", "Express.js", "Netlify"],
    liveLink: "https://amazing-sopapillas-d0f562.netlify.app",
    githubLink: "https://github.com/mehedihasanv/homenest-client",
    challenges: "Faced challenges in MongoDB connection",
    improvements:
      "Focused on continuous improvement through iterative debugging, role-based login ,UI/UX polish, and secure backend flows, ensuring each project evolves toward professional standards",
    gradient: "from-blue-500/20 via-cyan-600/20 to-teal-500/20",
  },
  {
    id: "App Project",
    name: "App Project",
    image: "/Screenshot 2026-03-02 110322.png",
    tagline: "Install apps instantly, hassle-free ",
    description:
      "A modern e-commerce platform with a focus on speed and conversion. Features include advanced product search with filters, real-time inventory management, secure payment processing via Stripe, order tracking, review system, and an admin dashboard with sales analytics. Optimized for Core Web Vitals with a perfect Lighthouse score.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
    liveLink: "https://teal-concha-0082e4.netlify.app",
    githubLink: "https://github.com/mehedihasanv/apps-project",
    challenges: "i face no challange in this project",
    improvements:
      "Actually this app need many more improvement.Like Role based login,security and many more.There is no backend .i am working on it ",
    gradient: "from-emerald-500/20 via-green-600/20 to-lime-500/20",
  },
];
