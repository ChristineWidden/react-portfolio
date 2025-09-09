import AlienInvasionDetails from "./alien_invasion"
import GoblinChase from "./goblin_chase";
import MSThesis from "./Thesis";

// Map slug → detail component
const projectDetails: Record<string, React.FC | undefined> = {
    "ms_thesis": MSThesis,
    "alien_invasion": AlienInvasionDetails,
    "goblin_chase": GoblinChase,
    
};

export default projectDetails;
