const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    type: "theme",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jul 12, 2026",
    title: "RAG tutorials end where the real problems start",
    image: "/images/blog1.png",
    link: "https://anirudh27.hashnode.dev/rag-tutorials-end-where-the-real-problems-start",
  },
  {
    id: 2,
    date: "Jul 12, 2026",
    title: "The model call is the easy part",
    image: "/images/blog2.png",
    link: "https://anirudh27.hashnode.dev/the-model-call-is-the-easy-part",
  },
  {
    id: 3,
    date: "Jul 12, 2026",
    title: "What actually happens when you click deploy",
    image: "/images/blog3.png",
    link: "https://anirudh27.hashnode.dev/what-actually-happens-when-you-click-deploy",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "AI/ML",
    items: ["Python", "TensorFlow", "PyTorch", "LangGraph" , "R", "R-Studio"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Django" , "Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Kubernetes", "AWS"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/anirudh27004",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "coming up",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/BuggedDevx",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/anirudh27004",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // Project 1: WeNaude Labs (flagship)
    {
      id: 5,
      name: "WeNaude Labs",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "WeNaude Labs.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack text-to-speech platform inspired by ElevenLabs.",
            "Voice generation, a browsable voice library, and generation history with waveform playback.",
            "Real usage-based subscription billing via Polar and Clerk-powered authentication with org/team support.",
            "Built with Next.js 16, React 19, tRPC, Prisma, PostgreSQL, and AWS S3 for audio storage.",
          ],
        },
        {
          id: 2,
          name: "wenaude-labs.live",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://wenaude-labs-production.up.railway.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/anirudh27004/WeNaude-Labs",
          position: "top-60 right-20",
        },
      ],
    },

    // Project 2: Vercel Clone
    {
      id: 6,
      name: "Vercel Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Vercel Clone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A Vercel clone built as three services working together.",
            "api-server: HTTP server exposing the REST APIs, alongside a socket.io server.",
            "build-server: a Docker image that clones a repo, builds it, and pushes the build to S3 (via AWS ECR).",
            "s3-reverse-proxy: maps subdomains and domains to the static build assets in the S3 bucket.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/anirudh27004/Vercel_Clone",
          position: "top-20 left-20",
        },
      ],
    },

    // Project 3: Eerie
    {
      id: 7,
      name: "Eerie",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Eerie.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An interactive 3D landing page built from two images layered on top of each other.",
            "Moving the cursor reveals the hidden world beneath through a liquid lens effect, which smoothly hides again as the mouse moves away.",
            "Custom GLSL trail, refraction, vignette, and chromatic aberration shaders on a Three.js ping-pong FBO render loop.",
            "Built with Next.js 16, Three.js, Framer Motion, and Tailwind CSS v4.",
          ],
        },
        {
          id: 2,
          name: "eerie-two.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://eerie-two.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/anirudh27004/eerie",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Full-stack developer who likes shipping AI products end to end.",
      description: [
        "I'm Anirudh, a developer who enjoys the unglamorous part of building software: taking an idea past the demo stage and turning it into something people can actually use.",
        "I've led a team of six building a research automation platform for a market research client, with real users and real documents. That project taught me most of what I know about RAG systems, and why retrieval in production is a lot harder than any tutorial lets on.",
        "On my own time I build full products end to end. WeNaude Labs is my take on ElevenLabs, with a voice library and usage-based billing. I've also built a small Vercel clone and a few interactive 3D experiments, mostly to understand how the tools I use every day actually work under the hood.",
        "When I'm not shipping, I'm usually writing about what I learned along the way. You can find those posts in the Articles app on this desktop.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // Opens the Resume window, which loads /files/resume.pdf directly.
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };