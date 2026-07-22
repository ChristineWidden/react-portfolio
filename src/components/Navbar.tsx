import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "1rem", background: "#222", color: "white" }}>
            <Link to="/" style={{ marginRight: "1rem", color: "white" }}>Home</Link>
            <Link to="/projects" style={{ marginRight: "1rem", color: "white" }}>Projects</Link>
            <Link to="/experience" style={{ marginRight: "1rem", color: "white" }}>Experience</Link>
            <Link to="/contact" style={{ color: "white" }}>Contact</Link>
            <Link to="https://www.linkedin.com/in/christinewidden/" style={{ color: "white" }}>LinkedIn</Link>
            <Link to="https://github.com/ChristineWidden" style={{ color: "white" }}>GitHub</Link>
        </nav>
    );
}
