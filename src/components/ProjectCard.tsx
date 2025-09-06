import { Link } from "react-router-dom";
import "./ProjectCard.css"; // CSS for the hover effect

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <Link to={`/projects/${image}`} className="project-card">
            <div className="project-overlay">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img className="project-image" 
            src={`${import.meta.env.BASE_URL}images/${image}.png`}
            alt={title} />
        </Link>
    );
};

export default ProjectCard;
