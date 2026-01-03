import "./Home.css"

export default function Home() {
    return (
        <div>
            <h1>Welcome to my Portfolio!</h1>
            <p>I'm a recent Computer Science grad with a passion for building great games and accessible software!</p>

            <div className="image-grid">
                <img
                    src={`${import.meta.env.BASE_URL}images/home/suit.jpg`}
                    alt="A young woman with curly hair wearing a suit jacket, smiling as she takes a selfie." />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/crown.jpg`}
                    alt="A young woman wearing a costume crown, red robe, and PAX lanyard smiling at the camera." />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/coolCosplay.jpg`}
                    alt="A dramatic photo of a young woman sitting under a tree, wearing a crown and red robe and holding a minecraft sword." />
                                    <img
                    src={`${import.meta.env.BASE_URL}images/home/campus.jpg`}
                    alt="A selfie of a young woman squinting at the camera, taken at the Cal Doly Dexter lawn." />

                <img
                    src={`${import.meta.env.BASE_URL}images/home/grad.jpg`}
                    alt="A selfie of a young woman in a graduation hat and gown, grinning and squinting at the camera." />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/fingers.jpg`}
                    alt="A silly photo of a yooung woman in a cal poly computer room, wearing long fabric fingers." />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/pax23.jpg`}
                    alt="A selfie of a young woman wearing a PAX lanyard and zelda shirt with the seattle skyline behind her." />

                <img
                    src={`${import.meta.env.BASE_URL}images/home/tenna.jpg`}
                    alt="A photo of a young woman standing in a backyard, grinning and pointing at the camera." />
                <img
                    src={`${import.meta.env.BASE_URL}images/home/cosplay.jpg`}
                    alt="A photo of a young woman doing a cool pose in a royal halloween costume." />

            </div>

        </div>
    );
}
