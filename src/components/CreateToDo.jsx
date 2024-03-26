import React, { useState } from "react";

const CreateToDo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task1", "Task2", "Task3"];

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add Task">
        Add Task
      </button>
      <h1>input is: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateToDo;
