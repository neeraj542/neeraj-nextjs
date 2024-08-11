export type projectData = {
  image: {
    src: string;
  };
  title: string;
  description: string;
  header: string;
  tags: string[];
  link: {
    github: string;
    youtube?: string;
    live?: string;
  };
};

export const projectsContent: projectData[] = [
  {
    image: {
      src: "/taskify.png",
    },
    title: "Taskify",
    header: "Team Collaboration Platform",
    description:
      "Taskify is a web application designed to streamline team task management. Built using the MongoDB, Express.js, React, and Node.js, this platform provides a user-friendly interface for efficient task assignment, tracking, and collaboration.",
    tags: [
      "Javascript",
      "React.js",
      "Redux",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Vite",
      "Headless UI"
    ],
    link: {
      github: "https://github.com/neeraj542/Taskify-Full-Stack-Project-using-MERN",
      youtube: "",
      live: "https://teamtaskify.netlify.app",
    },
  },
  {
    image: {
      src: "/RoomFit.png",
    },
    title: "RoomFit",
    header: "A Website for Roomie Finders",
    description:
      "RoomFit aims to simplify the process of finding a roommate by providing a platform where users can find houses with a vacancy in it, posted by people looking for a roommate.",
    tags: [
      "Javascript",
      "ReactJS",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "JWT",
      "bCrypt",
      "Leaflet"
    ],
    link: {
      github: "https://github.com/neeraj542/RoomFit",
      youtube: "",
      live: "https://roomfit.github.io",
    },
  },
  {
    image: {
      src: "/fintracker.png",
    },
    title: "PocketMate",
    header: "A personal finance tracker website",
    description:
      "The goal of this project is to help individuals manage their finances effectively. It provides a user-friendly interface for tracking income and expenses, setting financial goals, and monitoring budget limits.",
    tags: [
      "Javascript",
      "React.js",
      "Firebase",
      "Ant Design",
      "React-router-dom"
    ],
    link: {
      github: "https://github.com/neeraj542/Personal-Finance-Tracker",
      youtube: "",
      live: "https://finance542.netlify.app",
    },
  }
];
