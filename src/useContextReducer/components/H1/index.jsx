import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

const H1 = () => {
  const context = useContext(GlobalContext);

  return (
    <h1>{context.state.title} {context.state.counter}</h1>
  )
}

export default H1;