import "./Home.css"

export default function Home() {
    return (
        <div>
            <h1>Welcome to my Portfolio!</h1>
            <p>This is the home page.</p>
            <p>I'm a recent Computer Science grad with a passion for building great games and accessible software!</p>

            <div className="image-grid">
                <img
                    src={`${import.meta.env.BASE_URL}images/home/suit.jpg`}
                    alt="TODO alt text" />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/crown.jpg`}
                    alt="TODO alt text" />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/coolCosplay.jpg`}
                    alt="TODO alt text" />
                                    <img
                    src={`${import.meta.env.BASE_URL}images/home/campus.jpg`}
                    alt="TODO alt text" />

                <img
                    src={`${import.meta.env.BASE_URL}images/home/grad.jpg`}
                    alt="TODO alt text" />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/fingers.jpg`}
                    alt="TODO alt text" />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/pax23.jpg`}
                    alt="TODO alt text" />

                <img
                    src={`${import.meta.env.BASE_URL}images/home/tenna.jpg`}
                    alt="TODO alt text" />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/cosplay.jpg`}
                    alt="TODO alt text" />

            </div>

        </div>
    );
}
