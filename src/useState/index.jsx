import { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1)
  }

  return (
    <div>
      <h1>Contador { counter }</h1>
      <button type="button" onClick={handleClick}>+</button>
    </div>
  )
}

export default State;