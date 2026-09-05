export default function UnrealMaterials() {
    const placeholderImages = [
        { src: "ue5materials/image.png", alt: "Clear window" },
        { src: "ue5materials/image2.png", alt: "slightly warped window from the side" },
        { src: "ue5materials/image3.png", alt: "Various shapes of glass and stone textures" },
        { src: "ue5materials/dissolve.png", alt: "Technology dissolve images" },
    ];

    return (
        <div className="container">
            <div className="section-box">
                <p>Various custom materials made in the Unreal Engine 5 material editor.</p>

                <div className="ue5-material-grid">
                    <video controls>
                        <source
                            src={`${import.meta.env.BASE_URL}images/project_images/ue5materials/bideo.mp4`}
                            type="video/mp4"
                        />
                        Your browser does not support the video element.
                    </video>

                    {placeholderImages.map((image) => (
                        <img
                            key={image.src}
                            src={`${import.meta.env.BASE_URL}images/project_images/${image.src}`}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
