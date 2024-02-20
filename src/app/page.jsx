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
      index: Date.now(),
      todoDateAdded,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(existingTodos);
  }, []);

  useEffect(() => {
    const date = new Date();

    const dayOptions = { day: "2-digit" };
    const monthOptions = { month: "short" };
    const yearOptions = { year: "2-digit" };

    // Use toLocaleString para obter o dia, mês e ano na forma de string
    const day = date.toLocaleString("default", dayOptions);
    const month = date.toLocaleString("default", monthOptions).toUpperCase(); // Mês em maiúsculas
    const year = date.toLocaleString("default", yearOptions);

    // Cominar as strings para criar a descrição
    const dateDescription = `${day} ${month} ${year}`;

    setTodoDateAdded(dateDescription);
  }, []);

  const removeTodo = (indexToRemove) => {
    const filteredTodos = todos.filter((todo) => todo.index !== indexToRemove);

    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.todo}>
          <div className={styles.header}>
            <h1>Todo List - No Login Needed</h1>
          </div>
          <div className={styles.elements}>
            <AddTask addTodo={addTodo} />
            <Todos todos={todos} removeTodo={removeTodo} />
          </div>
        </div>
      </div>
    </main>
  );
}
