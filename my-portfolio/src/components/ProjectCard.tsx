
import "./ProjectCard.css"; // CSS for the hover effect

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <div className="project-card">
            <div className="project-overlay">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img className="project-image" src={image} alt={title} />
        </div>
    );
};

export default ProjectCard;
