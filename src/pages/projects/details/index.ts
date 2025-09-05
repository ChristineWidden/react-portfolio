import ThesisDetails from "./ms_thesis";

// Map slug → detail component
const projectDetails: Record<string, React.FC | undefined> = {
    "ms_thesis": ThesisDetails,
};

export default projectDetails;
