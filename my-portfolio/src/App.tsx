import { useEffect, useState } from "react";
import "./App.css";

import ProjectCard from "./components/ProjectCard";

import type { Project } from "./types/Project";
import type { Job } from "./types/Job";
import type { Item } from "./types/Item";

type Tab = "project" | "job" | "contact" | "about";

function App() {
  const [selectedTab, setSelectedTab] = useState<Tab>("project");
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  // Load projects and stuff from JSON
  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects || []);
        setJobs(data.work_experience || []);
      })
      .catch((err) => console.error("Failed to load resume data:", err));
  }, []);


  // Merge both into a single item list for filtering
  const allItems: Item[] = [
    ...projects.map((proj, i) => ({
      id: i,
      title: proj.name,
      description: proj.desc.join(" "),
      image: proj.id ?? "null",
      keywords: proj.keywords ?? [],
      type: "project" as const,
    })),
    ...jobs
    .filter((job) => Array.isArray(job.description)) // ✅ only include jobs with valid descriptions
    .map((job, i) => ({
      id: i + 1000, // offset to prevent key conflicts
      title: job.title,
      description: (job.description ?? []).join(" "),
      image: job.id ?? "null",
      keywords: job.keywords ?? [],
      type: "job" as const,
    })),
  ];

  const filteredItems = allItems.filter(
    (item) =>
      item.type === selectedTab &&
      (item.title + item.description + item.keywords.join(" "))
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const tabs: { id: Tab; label: string }[] = [
    { id: "project", label: "Projects" },
    { id: "job", label: "Jobs" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="App">
      {/* Nav Tabs */}
      <nav className="navbar">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            className={`nav-button ${selectedTab === id ? "active" : ""}`}
            onClick={() => {
              setSelectedTab(id);
              setSearchTerm("");
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {selectedTab === "project" || selectedTab === "job" ? (
        <>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by keyword or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          {/* Card Grid */}
          <div className="item-grid">
            {filteredItems.map((item) =>
              item.type === "project" ? (
                <ProjectCard
                  key={item.id} // for list items. each list item should have a key
                  title={item.title}
                  description={item.description}
                  image={item.image == "" || !item.image ? "null" : item.image}
                />
              ) : (
                <div key={item.id} className="job-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    {(item.keywords ?? []).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </>
      ) : selectedTab === "about" ? (
        <div className="static-page">
          <h2>About Me</h2>
          <p>This is a short bio or overview of who you are...</p>
        </div>
      ) : selectedTab === "contact" ? (
        <div className="static-page">
          <h2>Contact</h2>
          <p>Here's how people can reach you...</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
