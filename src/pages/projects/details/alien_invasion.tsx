function AlienInvasionDetails() {
    return (
        <div className="container">
            <div className="section-box">
                <p>Alien invasion is a Unity-based tower defense game, written in C#. It was developed alongside
                    Caroline White, Giovanni Librizzi, Kaydee Tu, and Thomas Panyasrivinit.</p>

                <div className="centered">
                    <a href="https://giovannilibrizzi.itch.io/alien-invasion" target="_blank">
                        <button>Play the Game!</button></a>
                    <a href="https://github.com/ChristineWidden/CSC371_Project" target="_blank">
                        <button>GitHub</button></a>
                </div>

                <p>In addition to assisting with finding, making, and importing assets, level design, and playtesting, I
                    primarily worked on the tower upgrade system.</p>
                <p>Keeping in mind the possibility that if we were to continue developing the game past the conclusion
                    of the course, we may want to add quite a few different towers, I sought to make the tower upgrade
                    system as modular as possible through the use of object-oriented programming.</p>

                <div className="centered">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/project_images/alienInvasion.JPG`}
                        alt="A screenshot of a video game. A few towers sit along a path, shooting projectiles at turtle monsters." />
                </div>
            </div>
        </div>
    );
}
export default AlienInvasionDetails;
