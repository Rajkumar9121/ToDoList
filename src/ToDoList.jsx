import React, { useState } from "react";
import ReactDom from "react-dom";

function ToDoList() {
  const [strikethrough, setStrikeThrough] = useState({});
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() != "") setTask((prevItem) => [...prevItem, newTask]);
    setNewTask("");
  }

  function handleClick(index) {
    setStrikeThrough((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  function deleteTask(index) {
    setTask(task.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h1>ToDoList App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the task"
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ol>
        {task.map((element, index) => (
          <li key={index}>
            <span
              onClick={() => handleClick(index)}
              style={{
                textDecoration: strikethrough[index] ? "line-through" : "none",
              }}
            >
              {element}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
