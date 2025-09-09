export default function ResumeBuilder() {
    return (
        <div className="container">
            <div className="section-box">
                <p>Frustrated with the tedious nature of making small changes to my resume in order to best tailor it to each job I apply for, I decided that I wanted to expidite the process.</p>
                <p>This app draws upon a JSON file with just about every skill, job, and project I could ever want to put on a resume, presenting the options as checklists and dropdowns, and generates a tidy pdf when done.</p>
                <div className="centered">
                    <a href="https://github.com/ChristineWidden/ResumeGenerator" target="_blank">
                        <button>GitHub</button></a>
                </div>

                {/* TODO update this image it sucks! */}
                <div className="centered">
                    <img src={`${import.meta.env.BASE_URL}images/project_images/ResumeGenerator.JPG`}
                        alt="A screenshot of a simple web app. There are a number of checklists and dropdowns asking for things like name, job title, and job experience."/>
                </div>
                <div className="centered">
                    <img src={`${import.meta.env.BASE_URL}images/project_images/resume.JPG`}
                        alt="A screenshot of a resume."/>
                </div>
            </div>
        </div>
    );
}
