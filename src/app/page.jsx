"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";
import AddTask from "../components/addTodo";
import Todos from "../components/todos";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    const newTodo = {
      taskInfo: e.taskInfo,
      taskDescription: e.taskDescription,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(existingTodos);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.todo}>
          <div className={styles.header}>
            <h1>Todo lisst</h1>
          </div>
          <AddTask addTodo={addTodo} />
        </div>
        <Todos todos={todos} />
      </div>
    </main>
  );
}