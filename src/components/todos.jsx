"use Client";

import React, { useState, useEffect } from "react";
import CalendarioIcon from "./icons/calendarioIcon";
import DeleteIcon from "./icons/DeleteIcon";

const Todos = ({ todos, removeTodo }) => {
  return (
    <>
      <div className="todo-lists">
        <div className="todo-lists__container">
          <h3 className="todo-lists__title">
            Your <strong>TO-DO</strong> lists
          </h3>
          <div className="todo-lists__infos">
            {todos.map((task, index) => (
              <div className="todo-lists__single" key={index}>
                <div className="todo-lists__single--texts">
                  <h3>{task.taskInfo}</h3>
                  {task.taskDescription.length !== 0 && (
                    <li>{task.taskDescription}</li>
                  )}
                </div>
                <div className="todo-lists__single--date">
                  <CalendarioIcon />
                  <p>{task.todoDateAdded}</p>
                </div>

                <button onClick={() => removeTodo(task.index)} className="todo-lists__single--delete">
                  <DeleteIcon />
                </button>
              </div>
            ))}
            {todos?.length == 0 && (
              <div>
                <h1>sem task</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
