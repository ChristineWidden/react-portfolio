import "./Home.css"

export default function Home() {
    return (
        <div>
            <h1>Welcome to my Portfolio!</h1>
            <p>Hi! Im Christine, a Computer Science graduate with a passion for game development, quality assurance, and building polished, accessible interactive experiences. I have a strong background in Unity, C#, and software testing, and I enjoy working at the intersection of engineering, creativity, and player experience. My goal is to build reliable, thoughtful systems and contribute to games and tools that bring joy to players.</p>
            {/* TODO I removed the image grid, so now I should remove the associated code as well, probably */}
                <img
                    src={`${import.meta.env.BASE_URL}images/home/suit.jpg`}
                    alt="A young woman with curly hair wearing a suit jacket, smiling as she takes a selfie." />

        </div>
    );
}
