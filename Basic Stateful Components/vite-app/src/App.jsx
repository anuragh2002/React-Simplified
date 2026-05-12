import { useState } from "react";

function App() {
  const [name, setName] = useState(slowGetter);

  function slowGetter() {
    console.log("State setter");
    return "Kyle";
  }

  function handleClick() {
    setName("Anuragh");
    console.log("Re - render");
  }

  // const [counter, setCounter] = useState(0);
  // console.log("re render");

  // function handleDecrement() {
  //   if (counter === 0) return;
  //   setCounter(counter - 1);
  // }

  // function handleIncrement() {
  //   setCounter(counter + 1);
  // }

  return (
    <div>
      {/* <button onClick={handleDecrement}>-</button>
      {/* Calling handleDecrement function on click of - button but without parenthesis  
      because we don't want onCick to be equal to what will be returned by handleDecrement function 
      but we want it to be equal to the function itself so that it can be called when the button is clicked */}
      {/* {counter} */}
      {/* <button onClick={handleIncrement}>+</button> } */}
      <h1 onClick={handleClick}>Hi {name}</h1>
    </div>
  );
}

export default App;
