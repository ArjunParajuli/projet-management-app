import React from "react";
import { MdAddToPhotos } from "react-icons/md";

const Sidebar = ({ setShowNewProject, projects, setSelectedProjects, selectedProjects }) => {

  return (
    <div className="bg-[#6D7E86] w-3/12 h-full rounded-tr-lg md:p-[3rem]">
      <h2 className="md:text-3xl mb-[3rem]">Your Projects</h2>
      <button
        className="md:text-lg opacity-80 rounded-md bg-[#4B5563] p-3 hover:opacity-100 transition duration-300"
        onClick={() => 
          // setShowNewProject(true)
          setShowNewProject('edit-project')
        }
      >
        Add New Project
      </button>
      <ul className="my-[2rem]">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button className="new-project-anim bg-black opacity-90 my-[1rem] w-[9rem] p-2 flex items-center gap-1 rounded-md hover:bg-gray-600 transition duration-300"
              onClick={()=>{
                if(selectedProjects.includes(project)){
                  return;
                }
                setSelectedProjects((prev)=>{
                  return [
                    ...prev,
                    project
                  ]
                })
                setShowNewProject('disable')
              }}
              >
                {project.title} <MdAddToPhotos />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
