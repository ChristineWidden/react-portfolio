import { useState, useEffect } from "react";
import resumeData from "../../resumeData.json";
import ProjectCard from "../../components/ProjectCard";
import type { Project } from "../../types/Project";

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(resumeData.projects || []);
    }, []);

    const filteredProjects = projects.filter((proj) =>
        (proj.name + proj.desc.join(" ") + (proj.keywords ?? []).join(" "))
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) &&
            (proj.keywords.length > 0)
    );

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
                        description={proj.desc[0]}
                        image={proj.id || "null"}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
