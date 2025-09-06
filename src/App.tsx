import "./App.css";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      {/* Navbar with links */}
      <Home/>
      {/* Here React Router will render the current page */}
      <div className="page-content">
        {/* The <Routes> component is in Routes.tsx */}
      </div>
    </div>
  );
}

export default App;
