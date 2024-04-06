import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

const NewProject = ({ setProjects, setShowNewProject }) => {
  const [showModal, setShowModal] = useState(false);
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const saveHandler = () => {
    if (
      titleRef.current.value === "" ||
      descRef.current.value === "" ||
      dateRef.current.value === ""
    ) {
      setShowModal((prev) => !prev);
      return;
    }

    // get the user input data and update the projects array with it
    const userEnteredData = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      date: dateRef.current.value,
      id: Math.random(),
    };
    setProjects((prevProjects) => {
      return [...prevProjects, userEnteredData];
    });

    // setShowNewProject((prev) => !prev);
    setShowNewProject('disable')
  };

  return (
    <div className="mt-[3rem] ml-[4rem]">
      { !showModal ? (
        <>
          {/* input tags */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label>Title</label>
              <input
                type="text"
                className="md:w-[300px] border-md md:p-1 focus:outline-none focus:bg-stone-500"
                ref={titleRef}
              />
            </div>
            <div className="flex flex-col">
              <label>Description</label>
              <textarea
                className="md:w-[300px] h-[150px] p-2 focus:outline-none focus:bg-stone-500"
                ref={descRef}
              ></textarea>
            </div>
            <div className="flex flex-col w-[300px] z-[10]">
              <label>Due Date</label>
              <input type="date" ref={dateRef} />
            </div>
          </div>

          {/* save and cancel buttons */}
          <div className="my-5 flex gap-3">
            <button
              className="rounded-md bg-green-500 p-2 opacity-60 hover:opacity-90 transition duration-300"
              onClick={saveHandler}
            >
              SAVE
            </button>
            <button
              className="rounded-md bg-red-500 p-2 opacity-60 hover:opacity-90 transition duration-300"
              onClick={() => 
                // setShowNewProject((prev) => !prev)
                setShowNewProject('')
              }
            >
              CANCEL
            </button>
          </div>
        </>
      ) : (
        createPortal(
          <div className="modal-overlay">
            <div className="modal text-center">
              <h3 className="md:text-2xl mb-[1rem]">
                Fields cannot be left empty!
              </h3>
              <button
                className="rounded-md bg-green-500 p-2 opacity-80 cursor-pointer hover:opacity-90 transition duration-300"
                onClick={() => {
                  setShowModal(false); // Close the modal
                }}
              >
                Fill Again
              </button>
            </div>
          </div>,
          document.getElementById("modal-root")
        )
      )}
    </div>
  );
};

export default NewProject;
