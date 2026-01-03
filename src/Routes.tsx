import { Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Contacts from "./pages/Contact";
import Projects from "./pages/projects/Projects";
import ProjectPage from "./pages/projects/ProjectPage";
import App from "./App";

function AppRoutes() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/experience" element={<Jobs />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="*" element={<h2>Page not found!</h2>} />
            </Routes>
        </div>
    );
}

export default AppRoutes;
