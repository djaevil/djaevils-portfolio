import { type Project } from "@/features/projects/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A platform that will simulate a real e-commerce website with user creation, product listings, and a shopping cart, as well as payment integration.",
    tags: ["React", "Node.js", "Stripe"],
    status: "Upcoming",
  },
  {
    id: "project-2",
    title: "Game Hub",
    description:
      "A website that will serve as a hub for various web-based games that I have created, allowing users to play, rate, and comment on games.",
    tags: ["Various technologies"],
    status: "On hold",
  },
  {
    id: "project-3",
    title: "DnD Character Builder",
    description:
      "A web application that helps players create and manage their Dungeons & Dragons characters digitally.",
    tags: ["TypeScript", "Express", "MongoDB"],
    status: "On hold",
    githubUrl: [
      "https://github.com/djaevil/dnd-character-manager-frontend",
      "https://github.com/djaevil/dnd-character-manager-backend",
    ],
  },
  {
    id: "project-4",
    title: "Brainrot Spawner Tycoon",
    description:
      "A Roblox game that I developed together with a friend using Luau. We wanted to create something based on the popular 'Brainrot' trend and came up with a tycoon game variant.",
    tags: ["Luau", "Roblox"],
    status: "Completed",
    link: "https://www.roblox.com/games/97783244907874/Brainrot-Spawner-Tycoon",
  },
];
