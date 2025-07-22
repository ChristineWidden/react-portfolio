import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

import alienImg from '../assets/alien-invasion.jpg';
import resumeImg from '../assets/resume-gen.jpg';
import goblinImg from '../assets/goblin-chase.jpg';

export default function Projects() {
    return (
        <div className={styles.projectsPage}>
            <h2>Projects</h2>
            <div className={styles.projectsGrid}>
                <ProjectCard
                    title="Alien Invasion"
                    description="A Unity tower defense game built with a team."
                    image={alienImg}
                />
                <ProjectCard
                    title="Resume Generator"
                    description="A local web app for generating resumes."
                    image={resumeImg}
                />
                <ProjectCard
                    title="Goblin Chase"
                    description="A Unity bullet-hell platformer."
                    image={goblinImg}
                />
            </div>
        </div>
    );
}
