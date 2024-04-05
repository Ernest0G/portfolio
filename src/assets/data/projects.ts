import { magictools1, magictools2 } from "../images/index.ts";

export const ProjectsList = [
  {
    title: "Magic Tools (Closed Beta)",
    desc: "A Magic The Gathering companion app for playing in person. Currently, it includes some basic functionality such as a life counter, dice roller, and a coin flipper. The app also includes both local and online multiplayer functionality, allowing multiple users to connect to the same game.",
    live: "https://magictools.app/",
    git: "",
    images: [magictools1, magictools2],
    tools: ["React.js", "Socket.io", "Redis", "Express.js", "Supabase", "Docker"],
  },
  {
    title: "Echo Box",
    desc: `A playlist aggregator app, to listen to your Spotify and local playlists from a single source. It is currently
    not available for public use.`,
    live: "https://echo-box-syntax-samurai.vercel.app/",
    git: "https://github.com/missile720/music-player",
    images: [],
    tools: ["React.js", "Bootstrap", "Express.js", "AWS S3", "MongoDB"],
  },
  {
    title: "Dictionary Dash",
    desc: `A simple game where the player is given a definition, and must guess the correct word that matches the definition. The game is timed, and the
    player must answer as many questions as possible before time runs out. Each correct answer increases the player's score and
    gives them extra time. It also allows to choose between different difficulties.`,
    live: "",
    git: "https://github.com/Ernest0G/dictionary-dash",
    images: [],
    tools: ["HTML", "Javascript", "Express.js"],
  },
  {
    title: "This Website",
    desc: "This is my portfolio website showcasing my work experience and projects.",
    live: "",
    git: "https://github.com/Ernest0G/portfolio",
    images: [],
    tools: ["React.js", "TailwindCSS", "DaisyUI"],
  },
];
