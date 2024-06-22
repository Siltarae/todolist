import React, { useState } from "react";

const TodoList: React.FC = () => {
  const title: string = "오늘 할일";
  const [todos] = useState(["공부하기", "잠자기", "미팅하기"]);

  return (
    <div className="container">
      <h1>{title}</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
