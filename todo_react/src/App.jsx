import React, { useState } from "react";
import './App.css'

function Task({ task, index, completeTask, removeTask }) {
  return(
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line_through" : "" }}
    >
      {task.title}

      <button style={{ background: "red" }} onClick={() => removeTask(index)}>X</button>
      <button onClick={() => completeTask(index)}>Complete</button>

    </div>
  );
}


function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={e => setValue(e.target.value)} 
      />
    </form>
  );
}

