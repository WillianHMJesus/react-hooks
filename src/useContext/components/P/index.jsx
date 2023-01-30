import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

const P = () => {
  const context = useContext(GlobalContext);
  return (<p>{context.body}</p>)
}

export default P;