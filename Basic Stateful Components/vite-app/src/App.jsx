import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  console.log("re render");

  function handleDecrement() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  function handleIncrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {counter}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
