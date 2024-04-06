import React, {useState} from 'react'
import Tasks from './Tasks'

const SelectedProjects = ({selectedProjects, setSelectedProjects}) => {

    const removeHandler = (toRemoveId) =>{
        const updatedProjects = selectedProjects.filter((project)=>{
            return project.id !== toRemoveId
        })
        setSelectedProjects(updatedProjects)
    }
    
  return (
    <ul className='w-[35rem] mt-16 md:ml-[8rem]'>
    {selectedProjects.map((project) => {
        return (
            <li key={project.id} className="selected-projects bg-black shadow-md rounded-lg p-8 mb-4">
                <div className='flex justify-between'>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <button 
                    className="rounded-md bg-red-500 p-2 opacity-70 hover:opacity-100 transition duration-300"
                    onClick={() => removeHandler(project.id)}
                >
                    Remove Project
                </button>
                </div>
                <p className="text-gray-700 mb-2">{project.desc}</p>
                <p className="text-gray-500 mb-4">{project.date}</p>

                <Tasks />

            </li>
        )
    })}
</ul>

  )
}

export default SelectedProjects