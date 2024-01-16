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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Descibe your TO-DO
          <input
            type="text"
            name="description1"
            id="input-form1"
            placeholder="Enter your TO-DO"
            value={taskInput1}
            onChange={handleTaskInput}
            required
          />
        </label>

      

        <br />
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
        <br />
        <button type="submit">Add TO-DO</button>
      </form>
    </div>
  );
};

export default AddTask;
