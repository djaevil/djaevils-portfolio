import React, { useState, useMemo } from "react";
import NameSwitcher from "@/components/NameSwitcher";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { projects } from "@/features/projects/data/projects";

const HomePage: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [totalVisits] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags).sort()];
  }, []);

  // Define all possible statuses
  const allStatuses = [
    "All",
    "Completed",
    "In-progress",
    "On hold",
    "Upcoming",
  ];

  // Filter projects based on selected tag and status
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTag =
        selectedTag === "All" || project.tags.includes(selectedTag);
      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;
      return matchesTag && matchesStatus;
    });
  }, [selectedTag, selectedStatus]);

  // Limit displayed projects to 4 unless showAllProjects is true
  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const hasMoreProjects = filteredProjects.length > 4;

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-8 bg-linear-to-b from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            Hi, I'm <NameSwitcher />
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 text-gray-300">
            A developer who builds web applications and other things.
          </p>
          <div className="inline-block px-3 py-1 bg-green-400 text-gray-900 text-sm rounded">
            Available for new projects
          </div>
        </div>
      </section>

      {/* Two Column: Projects + Stats */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Projects */}
          <div className="lg:col-span-3">
            <h2 className="mb-8 text-gray-900 text-2xl font-bold">
              My Projects
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Tag Filter */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="tag-filter"
                  className="text-sm font-medium text-gray-700"
                >
                  Filter by Tag
                </label>
                <select
                  id="tag-filter"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="status-filter"
                  className="text-sm font-medium text-gray-700"
                >
                  Filter by Status
                </label>
                <select
                  id="status-filter"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {allStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              {(selectedTag !== "All" || selectedStatus !== "All") && (
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSelectedTag("All");
                      setSelectedStatus("All");
                    }}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <p className="text-gray-500 col-span-2 text-center py-8">
                  No projects match the selected filters.
                </p>
              )}
            </div>

            {/* Show All / Show Less Button */}
            {hasMoreProjects && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {showAllProjects
                    ? "Show less"
                    : `Show all (${filteredProjects.length - 4} more)`}
                </button>
              </div>
            )}
          </div>

          {/* Stats Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="mb-8 text-gray-900 text-2xl font-bold">
              Site stats
            </h2>

            <div className="bg-linear-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-lg">
              <p className="text-xl text-center mb-2 text-gray-400">
                Total Visits
              </p>
              <div className="flex flex-col items-center">
                <div className="text-3xl text-center">{totalVisits}</div>
                <div className="mt-2 h-1 w-16 bg-green-400 rounded"></div>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-xl text-center mb-4 text-green-100 font-bold">
                Click Counter
              </p>
              <div className="text-3xl text-center mb-6">{clicks}</div>
              <div className="text-center">
                <button
                  onClick={() => setClicks(clicks + 1)}
                  className="px-5 py-2 bg-white text-green-950 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                  Click Me!
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-sm text-gray-900 mb-3">Quick Info</p>
              <ul className="text-sm space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                  Location: Skåne, Sweden
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                  Available for work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
