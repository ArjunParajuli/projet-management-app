import React from 'react'
import { MdDeleteForever } from "react-icons/md";

export const Task = ({task, removeTaskHandler}) => {
    
  return (
    <div className="task-anim flex items-center justify-between my-2 px-4 py-2 bg-white shadow-md rounded-md">
      <p className="text-gray-800">{task}</p>
      <button
        className="flex items-center justify-center z-10 w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none"
        onClick={() => removeTaskHandler(task)}
      >
        <MdDeleteForever className="w-5 h-5" />
      </button>
    </div>
  )
}
