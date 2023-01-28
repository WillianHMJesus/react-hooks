import { useState, useEffect } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1)
  }

  // componentDidMount - executa só uma vez depois que o component carregar
  useEffect(() => {
    document.querySelector('button')?.addEventListener('click', handleClick);
    console.log('componentDidMount');

    // componentWillUmount - executa quando o component está sendo removido
    return () => {
      document.querySelector('button')?.removeEventListener('click', handleClick);
      console.log('componentWillUmount');
    }
  }, [])

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  })

  // componentDidUpdate - executa toda vez que o state counter atualiza
  useEffect(() => {
    console.log('componentDidUpdate - counter');
  }, [counter])

  return (
    <div>
      <h1>Contador { counter }</h1>
      <button type="button">+</button>
    </div>
  )
}

export default Effect;