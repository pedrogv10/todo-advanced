"use Client";

import React, { useState, useEffect } from "react";

const Todos = ({ todos }) => {
  return (
    <>
      <div className="d-flex">
        {todos.map((task, index) => (
          <div className="displayflex" key={index}>
            <p>Task: {task.taskInfo}</p>
            <p>Description: {task.taskDescription || "-"}</p>
          </div>
        ))}
      </div>
      {todos.length === 0 && (
        <div>
          <h1>sem task</h1>
        </div>
      )}
    </>
  );
};

export default Todos;
