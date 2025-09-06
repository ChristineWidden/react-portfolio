import AlienInvasionDetails from "./alien_invasion"
import GoblinChase from "./goblin_chase";
import Thesis from "./Thesis";

// Map slug → detail component
const projectDetails: Record<string, React.FC | undefined> = {
    "ms_thesis": Thesis,
    "alien_invasion": AlienInvasionDetails,
    "goblin_chase": GoblinChase,
    
};

export default projectDetails;
