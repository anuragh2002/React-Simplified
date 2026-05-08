import { useState } from "react";
import { ToDoList } from "./ToDoList.jsx";
import { Name } from "./Name.jsx";
import { ToDoListClass } from "./ToDoListClass.jsx";
import { NameClass } from "./NameClass.jsx";
import { ToDoListItem } from "./ToDoListItem.jsx";
import { ToDoListItemClass } from "./ToDoListItemClass.jsx";
import "./style.css";
import user from "./user.json";
import img from "./Code.png";

function App() {
  return (
    <div>
      {/* <h1>To-Do List</h1> */}
      {/* <ToDoList /> */}
      {/* <Name name="Custom Name" age={27} />
      <Name name="Different Name" isProgrammer={true} /> */}
      {/* <ToDoListItem isComplete={true}>
        <span>Anuragh</span>
      </ToDoListItem> */}
      {/* <ToDoListClass /> */}
      {/* <NameClass name="Custom Name">
        <span>Anuragh</span>
      </NameClass> */}
      <ToDoListItemClass isComplete={true}>
        <span>Anuragh</span>
      </ToDoListItemClass>
      <span>{JSON.stringify(user)}</span>
      <span>{user.name}</span>
      <div>
        <img src={img} alt="Code" />
      </div>
    </div>
  );
}

export default App;
