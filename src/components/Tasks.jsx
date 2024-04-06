import React, { useRef, useState } from "react";
import { Task } from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  
  const [addTask, setAddTask] = useState(false);
  const inputRef = useRef();

  const saveTaskHandler = () => {
    const newTask = inputRef.current.value;
    setTasks((prev) => {
      const updatedTasks = [...prev, newTask];
      return updatedTasks;
    });
    // reset input field
    inputRef.current.value = "";
    setAddTask(prev => !prev)
  };

  const removeTaskHandler = (taskToRemove) => {
    const updatedTasks = tasks.filter((eachTask) => eachTask !== taskToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div className="m-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        {tasks.length !== 0
          ? "Tasks for this Project:"
          : "Add Tasks for this project"}
      </h3>
      <ul>
        {tasks &&
          tasks.map((task, idx) => {
            return (
              <Task
                key={idx}
                task={task}
                removeTaskHandler={removeTaskHandler}
              />
            );
          })}
      </ul>
      {addTask && (
        <div className="flex justify-between mt-3 mb-1">
          <input
            type="text"
            placeholder="Enter new task"
            className="px-3 py-2 z-10 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 flex-1 mr-2"
            ref={inputRef}
          />
          <button
            className="rounded-md bg-green-500 px-2 opacity-60 hover:opacity-90 transition duration-300"
            onClick={saveTaskHandler}
          >
            Save
          </button>
        </div>
      )}
      <button
        className="md:text-lg opacity-80 rounded-md bg-[#4B5563] p-2 hover:opacity-100 transition duration-300 mt-3"
        onClick={() => setAddTask(true)}
      >
        Add Task
      </button>
    </div>
  );
};

export default Tasks;
