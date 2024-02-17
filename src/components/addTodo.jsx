"use Client";

import React, { useState, useEffect } from "react";

const AddTask = ({ addTodo }) => {
  const [taskInput1, setTaskInput1] = useState("");
  const [taskInput2, setTaskInput2] = useState("");

  const handleTaskInput = (e) => {
    setTaskInput1(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    setTaskInput2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      taskInfo: taskInput1,
      taskDescription: taskInput2,
    });
    setTaskInput1("");
    setTaskInput2("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <div className="add-todo__main">
          <label>
            Descibe your <span>TO-DO</span>
          </label>
          <input
            type="text"
            name="description1"
            id="input-form1"
            placeholder="Enter your TO-DO"
            value={taskInput1}
            onChange={handleTaskInput}
            required
          />
        </div>

        <button type="button" id="addDescription" onClick={() => console.log('oi')}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#1E1E1E" />
            <path
              d="M9.5625 14.2614V6.57955H11.0909V14.2614H9.5625ZM6.48864 11.1818V9.65341H14.1705V11.1818H6.48864Z"
              fill="#42E8D8"
            />
          </svg>
          <p>Add description</p>
        </button>

        {/* <div className="add-todo__description">
          <label>
            Here the Description, if necessary.
            <input
              type="text"
              name="description2"
              id="input-form2"
              placeholder="Enter your description."
              value={taskInput2}
              onChange={handleDescriptionInput}
            />
          </label>
        </div> */}
        <button type="submit">Add TO-DO</button>
      </form>
    </div>
  );
};

export default AddTask;
