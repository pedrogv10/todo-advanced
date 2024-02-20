"use Client";

import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const Todos = ({ todos }) => {
  return (
    <>
      <div className="todo-lists">
        <div className="todo-lists__container">
          {todos.map((task, index) => (
            <div className="todo-lists__single" key={index}>
              <div>
                <h3>{task.taskInfo}</h3>
                {task.taskDescription.length !== 0 && (
                  <li>{task.taskDescription}</li>
                )}
              </div>
              <div></div>
            </div>
          ))}
        </div>
        {todos?.length == 0 && (
          <div>
            <h1>sem task</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
