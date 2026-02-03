import { type Project } from "@/features/projects/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A platform that will simulate a real e-commerce website with user creation, product listings, and a shopping cart, as well as payment integration.",
    tags: ["Web Dev", "Stripe"],
    status: "Upcoming",
  },
  {
    id: "project-2",
    title: "Game Hub",
    description:
      "A website that will serve as a hub for various web-based games that I have created, allowing users to play, rate, and comment on games.",
    tags: ["Web Dev", "Various technologies"],
    status: "On hold",
  },
  {
    id: "project-3",
    title: "DnD Character Builder",
    description:
      "A web application that helps players create and manage their Dungeons & Dragons characters digitally.",
    tags: ["Web Dev", "TypeScript", "JavaScript"],
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
    tags: ["Game Dev", "Luau", "Roblox"],
    status: "Completed",
    link: "https://www.roblox.com/games/97783244907874/Brainrot-Spawner-Tycoon",
  },
  {
    id: "project-5",
    title: "Example Project 5",
    description:
      "This is a description for Example Project 5. It showcases the use of various web technologies.",
    tags: ["Web Dev"],
    status: "In-progress",
    link: "http://localhost:5173/",
  },
  {
    id: "project-6",
    title: "Example Project 6",
    description:
      "This is a description for Example Project 6. It is currently under development.",
    tags: ["Web Dev", "TypeScript"],
    status: "In-progress",
  },
  {
    id: "project-7",
    title: "Example Project 7",
    description:
      "This is a description for Example Project 7. It showcases the use of various web technologies.",
    tags: ["Web Dev"],
    status: "In-progress",
    link: "http://localhost:5173/",
  },
  {
    id: "project-8",
    title: "Example Project 8",
    description:
      "This is a description for Example Project 8. It is currently under development.",
    tags: ["Web Dev", "TypeScript"],
    status: "In-progress",
  },
  {
    id: "project-9",
    title: "Example Project 9",
    description:
      "This is a description for Example Project 9. It showcases the use of various web technologies.",
    tags: ["Web Dev"],
    status: "In-progress",
    link: "http://localhost:5173/",
  },
  {
    id: "project-10",
    title: "Example Project 10",
    description:
      "This is a description for Example Project 10. It is currently under development.",
    tags: ["Web Dev", "TypeScript"],
    status: "In-progress",
  },
];
