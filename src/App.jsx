import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [showNewProject, setShowNewProject] = useState("no-project");
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);

// showNewProject==='no-project' means show the UI with Add Project Button, 'edit-project' means show input fields and 'disable' means show nothing

  return (
    <div>
      <img src="/tasks.png" className="bg-img"></img>
      <div className="app mx-auto bg-[#F4F4F4] h-screen flex z-5">
        <Sidebar
          setShowNewProject={setShowNewProject}
          projects={projects}
          setSelectedProjects={setSelectedProjects}
          selectedProjects={selectedProjects}
        />
        <div className="w-full">
          {showNewProject === "edit-project" ? (
            <NewProject
              setProjects={setProjects}
              setShowNewProject={setShowNewProject}
            />
          ) : showNewProject === "disable" ? (
            <></>
          ) : (
            <NoProjectSelected setShowNewProject={setShowNewProject} />
          )}

          {selectedProjects.length !== 0 && (
            <SelectedProjects
              selectedProjects={selectedProjects}
              setSelectedProjects={setSelectedProjects}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
