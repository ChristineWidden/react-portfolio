function GoblinChase() {
    return (
        <div className="container">
            <div className="section-box">
                <p>Goblin Chase is a simple Unity-based bullet hell game, written in C#. It was developed alongside
                    Diana Koralski.</p>

                <div className="centered">
                    <a href="http://users.csc.calpoly.edu/~cwidden/Goblin%20Chase%20Final/" target="_blank">
                        <button>Play the Game!</button></a>
                </div>

                <div className="centered">
                    <img
                        className="projectImg"
                        src={`${import.meta.env.BASE_URL}images/project_images/goblinchase.JPG`}
                        alt="A screenshot of a 2d video game. A goblin stands on the ground below a wall, on top of which two guards are firing down arrows." />
                </div>
            </div>
        </div>
    );
}

export default GoblinChase;