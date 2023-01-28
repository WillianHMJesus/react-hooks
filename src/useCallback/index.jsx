import { useCallback, useState } from "react";
import Button from './components'

const Callback = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback(() => {
    setCounter((counter) => counter + 1)
  }, []);

  console.log('Callback renderizou');

  return (
    <div>
      <h1>Contador { counter }</h1>
      <Button handleClick={handleClick} />
    </div>
  )
}

export default Callback;