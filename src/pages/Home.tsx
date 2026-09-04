import "./Home.css"

export default function Home() {
    return (
        <div className="mainbody">
            <h1>Welcome to my Portfolio!</h1>

            <div className="intro-layout">
                <div className="intro-copy">
                    <p>Hi! I'm Christine, a Computer Science graduate with a passion for game development, quality assurance, and building polished, accessible interactive experiences. I have a strong background in Unity, C#, and software testing, and I enjoy working at the intersection of engineering, creativity, and player experience. My goal is to build reliable, thoughtful systems and contribute to games and tools that bring joy to players.</p>
                </div>

                <img
                    className="intro-image"
                    src={`${import.meta.env.BASE_URL}images/home/IMG_7141_Smaller.png`}
                    alt="A young woman with curly hair wearing a suit jacket, smiling as she takes a selfie."
                />
            </div>
        </div>
    );
}
