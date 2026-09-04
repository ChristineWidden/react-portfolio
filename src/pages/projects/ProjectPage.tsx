import { useParams } from "react-router-dom";
import resumeData from "../../resumeData.json";
import projectDetails from "./details";
import type { Project } from "../../types/Project";
import "./Project.page.css"; // CSS for the hover effect

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

function ProjectPage() {
    const { slug } = useParams();
    const project = normalizeProjects((resumeData.projects ?? []) as Partial<Project>[]).find(
        (p) => p.id === slug
    );

    if (!project) return <h2>Project not found</h2>;

    // Try to load manual detail component
    const DetailComponent = projectDetails[slug ?? ""];

    return (
        <div className="project-page">
            <h1>{project.name}</h1>

            {DetailComponent ? <DetailComponent /> : <p>No extra details yet.</p>}
        </div>
    );
}

export default ProjectPage;
