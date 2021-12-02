import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }

  function handleAdd() {
    setList((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="item"
          value={text}
          placeholder="Enter To-Do"
          type="text"
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((toDoList) => (
            <li>{toDoList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
