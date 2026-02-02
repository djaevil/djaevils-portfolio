export type Project = {
  id: string;
  title: string;
  title2?: string;
  description: string;
  tags: string[];
  status: "Completed" | "In-progress" | "On hold" | "Upcoming";
  imageUrl?: string;
  link?: string;
  githubUrl?: string[];
};
