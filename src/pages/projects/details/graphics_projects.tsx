function GraphicsProjectDetails() {
    return (
        <div className="container">
            <div className="section-box">
                <p>Various C++-based graphics and animation projects completed for the Computer Graphics and Computer Animation courses at Cal Poly. Utilized OpenGL and glsl.</p>

                <div className="centered">
                    <a href="https://github.com/ChristineWidden/ComputerGraphics_FinalProject" target="_blank">
                        <button>Graphics final on GitHub</button></a>
                    <a href="https://github.com/ChristineWidden/ComputerGraphics_Midterm" target="_blank">
                        <button>Graphics midterm on GitHub</button></a>
                </div>

                <div className="image-grid">
                    <video controls>
                        <source src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/animation_final_video.mp4`} type="video/mp4" />
                    </video>    
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/airplane.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/airplaneloop.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/bird.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/bunny.png`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/earth.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/flight.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/graphics_lab1.png`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/graphics_midterm.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/hi.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/homer.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/marioSwarm.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/ninja.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/notminecraft.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/redskull.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/scaryface.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/smooshskeleton.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/terrain.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/vibe.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/ninjastroll.gif`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/what.gif`}
                        alt="TODO" />
                    <img
                    src={`${import.meta.env.BASE_URL}images/project_images/graphics_project/animation_final.JPG`}
                        alt="TODO" />
                </div>
            </div>
        </div>
    );
}
export default GraphicsProjectDetails;
