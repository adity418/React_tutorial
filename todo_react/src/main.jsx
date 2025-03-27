import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Todo from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el)

root.render(<Todo />)