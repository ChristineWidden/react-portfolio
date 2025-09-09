export default function RecipeRecommender() {
    return (
        <div className="container">
            <div className="section-box">
                <p>A team project for Knowledge Discovery from Data, in which collaborative filtering was used to analyze grocery basket kaggle datasets and recommend recipes based on the ingredients a user possessed.</p>
                <p>Worked with Jadyn Ellis, Alexander Arrieta, and Ryuhei Shida</p>
                <div className="centered">
                    <a href={`${import.meta.env.BASE_URL}documents/RecipeRecommender_Report.pdf`} target="_blank">
                        <button>Final Documentation</button></a>

                </div>
                <div className="centered">
                    <a href={`${import.meta.env.BASE_URL}documents/RecipeRecommender_Presentation.pdf`} target="_blank">
                        <button>Final Presentation</button></a>
                </div>

            </div>
        </div>
    );
}
