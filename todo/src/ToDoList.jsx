import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["Add Tasks to ToDo"]);
  const [newtask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newtask.trim() !== "") {
      setTask((t) => [...t, newtask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">To Do List App</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={newtask}
          onChange={handleInputChange}
        />
        <button className="btn btn-success" onClick={addTask}>
          Add
        </button>
      </div>

      <ol className="list-group list-group-numbered">
        {task.map((t, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {t}
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
