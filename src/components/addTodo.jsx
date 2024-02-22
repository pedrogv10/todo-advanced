"use Client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const AddTask = ({ addTodo }) => {
  const [taskInput1, setTaskInput1] = useState("");
  const [taskInput2, setTaskInput2] = useState("");
  const [descriptionInput, setDescriptionInput] = useState(false);

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

        <button
          type="button"
          id="addDescription"
          onClick={() => setDescriptionInput(!descriptionInput)}>
          <div className="plus-round">
            <p>{!descriptionInput ? "+" : "-"}</p>
          </div>
          <p>Add description</p>
        </button>

        {descriptionInput && (
          <div className="add-todo__description">
            <label>Here the Description, if necessary.</label>
            <input
              type="text"
              name="description2"
              id="input-form2"
              placeholder="Enter your description."
              value={taskInput2}
              onChange={handleDescriptionInput}
            />
          </div>
        )}

        <Button id="addToDoButton" type="submit">
          Add TO-DO
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
