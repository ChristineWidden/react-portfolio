export default function Image2Recipe() {
    return (
        <div className="container">
            <div className="section-box">
                <p>Used a Convolutional Neural Network to identify common ingredients in photos of groceries set out, in order to suggest recipes to the user.</p>
                <p>Primarily utilized tensorflow and numpy.</p>
                <p>Worked with Dennis Phun, Yohan Sofian, and Gordon Luu.</p>
                <div className="centered">
                    <a href={`${import.meta.env.BASE_URL}documents/Image2Recipe_Report.pdf`} target="_blank">
                        <button>Final Documentation</button></a>
                </div>
                <div className="centered">
                    <a href={`${import.meta.env.BASE_URL}documents/Image2Recipe_Presentation.pdf`} target="_blank">
                        <button>Final Presentation</button></a>
                </div>

            </div>
        </div>
    );
}
