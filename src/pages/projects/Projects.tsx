import { useState, useEffect } from "react";
import resumeData from "../../resumeData.json";
import ProjectCard from "../../components/ProjectCard";
import type { Project } from "../../types/Project";

const normalizeProjects = (projects: Partial<Project>[]): Project[] => {
    const projectMap = new Map<string, Project>();

    projects.forEach((proj) => {
        const projectId = proj.id ?? proj.name;
        if (!projectId) return;

        const existing = projectMap.get(projectId);

        if (existing) {
            existing.name = existing.name || proj.name || "";
            existing.desc = [...(existing.desc ?? []), ...(proj.desc ?? [])];
            existing.keywords = [...new Set([...(existing.keywords ?? []), ...(proj.keywords ?? [])])];
            return;
        }

        projectMap.set(projectId, {
            id: projectId,
            name: proj.name ?? "",
            desc: proj.desc ?? [],
            keywords: proj.keywords ?? [],
        });
    });

    return [...projectMap.values()];
};

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(normalizeProjects((resumeData.projects ?? []) as Partial<Project>[]));
    }, []);

    const filteredProjects = projects.filter((proj) => {
        const searchableText = [
            proj.name,
            ...(proj.desc ?? []),
            ...(proj.keywords ?? [])
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                role="searchbox"
                placeholder="Filter by keyword or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="item-grid">
                {filteredProjects.map((proj) => (
                    <ProjectCard
                        key={proj.id}
                        title={proj.name}
                        description={proj.desc?.[0] ?? "No description available."}
                        image={proj.id || "null"}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
