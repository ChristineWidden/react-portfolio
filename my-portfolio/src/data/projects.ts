

import alienImg from '../assets/alien-invasion.jpg';
import resumeImg from '../assets/resume-gen.jpg';
import goblinImg from '../assets/goblin-chase.jpg';

export const projects: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    type: "project";
}[] = [
        {
            id: 1,
            title: "Alien Invasion",
            description: "A Unity tower defense game built with a team.",
            image: alienImg,
            tags: ["Unity", "C#", "Game Development"],
            type: "project",
        },
    ];

