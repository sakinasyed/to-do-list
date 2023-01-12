import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [itemList, setItemList] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setItemList(newValue);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, itemList];
    });
    setItemList("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={itemList} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <ToDoList text={toDoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
