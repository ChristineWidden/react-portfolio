import { useState, useEffect } from "react";
import type { Job } from "../types/Job";
import resumeData from "../resumeData.json";


function Jobs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setJobs(resumeData.work_experience || []);
    }, []);

    const filteredJobs = jobs.filter((job) =>
        (Array.isArray(job.select_description))
        &&
        (job.title + (job.select_description ?? []).join(" ") + (job.keywords ?? []).join(" "))
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                role="searchbox"
                placeholder="Filter by keyword or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="item-grid">
                {filteredJobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.select_description}</p>
                        <a href={job.company_website}>{job.company_website}</a>
                        <div className="tags">
                            {(job.keywords ?? []).map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
