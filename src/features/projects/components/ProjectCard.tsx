import React from "react";
import { type Project } from "@/features/projects/types";

interface ProjectCardProps {
  project: Project;
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case "Completed":
      return "bg-green-500";
    case "On hold":
      return "bg-red-500";
    case "Upcoming":
      return "bg-blue-500";
    case "In-progress":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasLinks =
    (project.githubUrl && project.githubUrl.length > 0) || project.link;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-green-400 flex flex-col h-full">
      {/* Header: Title & Status */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-gray-900 font-semibold">{project.title}</h3>
          <span
            className={`px-2 py-1 text-white text-xs rounded-md whitespace-nowrap ${getStatusColor(project.status)}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 border-b border-gray-200 flex-1">
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>

      {/* Meta: Tags */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links: GitHub & Project Link */}
      <div className="p-4">
        {hasLinks ? (
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {project.githubUrl?.map((url) => (
                <a
                  href={url}
                  key={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition-colors"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>

            {project?.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-gray-300 text-gray-800 text-sm rounded-md hover:bg-gray-200 transition-colors"
              >
                Visit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-400 italic">Repo coming soon...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
