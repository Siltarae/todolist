import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import Clock from "./Timer";

function App() {
  return (
    <div className="container">
      <TodoList />
      <Clock></Clock>
    </div>
  );
}

export default App;
