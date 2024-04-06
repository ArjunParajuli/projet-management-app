import React from 'react'
import { MdOutlinePostAdd } from "react-icons/md";

const NoProjectSelected = ({setShowNewProject}) => {
  return (
    <div className='w-1/3 flex flex-col items-center gap-3 mt-[3rem] ml-[2rem]'>
        <MdOutlinePostAdd className='w-[5rem] h-[5rem]' />
        <h3 className='md:text-2xl mb-[1rem]'>No Projects selected</h3>
        <button className='md:text-lg cursor-pointer rounded-md bg-[#4B5563] p-2 hover:opacity-50 transition duration-300'
        onClick={()=>setShowNewProject('edit-project')}>Create Project</button>
    </div>
  )
}

export default NoProjectSelected