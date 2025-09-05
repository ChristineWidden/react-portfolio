import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard';


export default function Projects() {
    return (
        <div className={styles.projectsPage}>
            <h2>Projects</h2>
            <div className={styles.projectsGrid}>
                <ProjectCard
                    title="Alien Invasion"
                    description="A Unity tower defense game built with a team."
                    image="null"
                />
                <ProjectCard
                    title="Resume Generator"
                    description="A local web app for generating resumes."
                    image="null"
                />
                <ProjectCard
                    title="Goblin Chase"
                    description="A Unity bullet-hell platformer."
                    image="null"
                />
            </div>
        </div>
    );
}
