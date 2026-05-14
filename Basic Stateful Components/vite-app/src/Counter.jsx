import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }
  return <h1 onClick={handleClick}> {count} </h1>;
}
