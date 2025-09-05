import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contacts from "./pages/Contact";
import Projects from "./pages/projects/Projects";
import ProjectPage from "./pages/projects/ProjectPage";
import App from "./App";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<h2>Page not found!</h2>} />
        </Routes>
    );
}

export default AppRoutes;
