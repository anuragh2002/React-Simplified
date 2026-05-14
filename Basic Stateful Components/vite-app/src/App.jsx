import { useState } from "react";
import { Counter } from "./Counter.jsx";

function App() {
  // const [name, setName] = useState(slowGetter()); //This is slower as the function is called to set inital value of state variable and also when state is updated
  // const [name, setName] = useState(() => {
  //   console.log("Inline state setter");
  //   return "Kyle"; //This is faster as it executes only once to set the initial value of state variable
  // });
  // const [name, setName] = useState(() => {
  //   return slowGetter(); //This executes only once to set the initial value of the state variable
  // });

  // const [name, setName] = useState("Kyle");
  // const [age, setAge] = useState(27);

  const [person, setPerson] = useState({
    name: "Kyle",
    age: 27,
  });

  function slowGetter() {
    console.log("State setter");
    return "Kyle";
  }

  function handleClick() {
    // console.log("Before age = ", age);

    // setName("Anuragh");

    // // After age
    // setAge((currentAge) => {
    //   return currentAge + 1; // 20 is taken as input and 21 is returned and age now becomes 21
    // });
    // console.log("After 1 age = ", age);

    // //After age
    // setAge((currentAge) => {
    //   // 21 is taken as input i.e., currentAge and 21 is returned and age now becomes 22. Age was set 2 times
    //   return currentAge + 1;
    // });
    // console.log("After 2 age = ", age);

    // setPerson({ name: "Anuragh" });

    setPerson((currentPerson) => {
      return {
        ...currentPerson,
        name: "Anuragh",
      };
    });
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
      <h1 onClick={handleClick}>
        Hi {person.name} {person.age}
      </h1>
      <Counter />
    </div>
  );
}

export default App;
