import AlienInvasionDetails from "./alien_invasion"
import GoblinChase from "./goblin_chase";
import MSThesis from "./Thesis";
import PrisonersAI from "./prisoners_ai";
import Image2Recipe from "./image_2_recipe";
import RecipeRecommender from "./recipe_recommender";
import ResumeBuilder from "./resume_builder";
import GraphicsProject from "./graphics_projects";

// Map slug → detail component
const projectDetails: Record<string, React.FC | undefined> = {
    "ms_thesis": MSThesis,
    "alien_invasion": AlienInvasionDetails,
    "goblin_chase": GoblinChase,
    "prisoners_ai": PrisonersAI,
    "image_2_recipe": Image2Recipe,
    "recipe_recommender": RecipeRecommender,
    "resume_builder": ResumeBuilder,
    "graphics_projects": GraphicsProject,
};

export default projectDetails;
