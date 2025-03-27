import React from "react";
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