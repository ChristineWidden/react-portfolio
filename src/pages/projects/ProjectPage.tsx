import { useParams } from "react-router-dom";
// import resumeData from "../../../public/resumeData.json";
import resumeData from '../../resumeData.json';
import projectDetails from "./details";
import "./Project.page.css"; // CSS for the hover effect

function ProjectPage() {
    const { slug } = useParams();
    const project = resumeData.projects.find((p: any) => p.id === slug);

    if (!project) return <h2>Project not found</h2>;

    // Try to load manual detail component
    const DetailComponent = projectDetails[slug ?? ""];

    return (
        <div className="project-page">
            <h1>{project.name}</h1>
            {/* <img className="project-page-image"
                src={`${import.meta.env.BASE_URL}images/${project.id}.png`}
                alt={project.name} />
            <p>{project.desc}</p> */}

            {/* Render extra manual content if it exists */}
            {DetailComponent ? <DetailComponent /> : <p>No extra details yet.</p>}
        </div>
    );
}

export default ProjectPage;
