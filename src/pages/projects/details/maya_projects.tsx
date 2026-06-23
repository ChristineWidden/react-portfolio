function MayaProjects() {
    return (
        <div className="container">
            <div className="section-box">
                <p>3D modeling projects completed in Maya.</p>

                {/* TODO compress these gifs */}
                {/* TODO edit gifs so they loop */}
                <div className="image-grid">
                    <video controls>
                        <source src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/ART384_FinalAnimation.mp4`} type="video/mp4" />
                    </video>    
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/finalRender3.png`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/gamedev4Screenshot.JPG`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/LowPoly.JPG`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/shaded.JPG`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/Smooth2.JPG`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/substance_painter_work.JPG`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/sword.JPG`}
                        alt="TODO" />
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/maya_projects/bowlOnTable.JPG`}
                        alt="TODO" />
                </div>
            </div>
        </div>
    );
}
export default MayaProjects;
