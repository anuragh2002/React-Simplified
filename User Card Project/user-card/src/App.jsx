import React from "react";
import "./user.css";
import user from "./user.json";
import { CardItem } from "./CardItem.jsx";
import { CardItemClass } from "./CardItemClass.jsx";

function App() {
  return (
    <div>
      {/* <CardItem
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      /> */}

      <CardItemClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </div>
  );
}

export default App;
