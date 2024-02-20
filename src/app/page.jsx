"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";
import AddTask from "../components/addTodo";
import Todos from "../components/todos";
import "../styles/main.scss";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todoDateAdded, setTodoDateAdded] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      ...todo,
      index: todos.length,
      todoDateAdded,
    };

    console.log(newTodo);

    const newTodos = [...todos, newTodo];

    setTodos(newTodos); 
    localStorage.setItem("todos", JSON.stringify(newTodos)); 
};
  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(existingTodos);
  }, []);

  useEffect(() => {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    let todayDate = `${dd}/${mm}/${yyyy}`;

    setTodoDateAdded(todayDate);
  }, []);


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.todo}>
          <div className={styles.header}>
            <h1>Todo List - No Login Needed</h1>
          </div>
          <div className={styles.elements}>
            <AddTask addTodo={addTodo} />
            <Todos todos={todos} />
          </div>
        </div>
      </div>
    </main>
  );
}
