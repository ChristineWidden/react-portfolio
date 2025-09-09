export default function PrisonersAI() {
    return (
        <div className="container">
            <div className="section-box">
                <p>Created an AI that learns to play Prisoner's Dilemma by facing off against the most popular algorithms.</p>
                <p>Utilizes Recurrent Proximal Policy Optimization, Multilayer Perceptrons, and Long Short-Term Memory.</p>
                <div className="centered">
                    <a href={`${import.meta.env.BASE_URL}documents/OpenPrison_Documentation.pdf`} target="_blank">
                        <button>Final Documentation</button></a>
                </div>
                <div className="centered">
                    <a href={`${import.meta.env.BASE_URL}documents/OpenPrison_Poster.pdf`} target="_blank">
                        <button>Final Poster</button></a>
                </div>

            </div>
        </div>
    );
}
