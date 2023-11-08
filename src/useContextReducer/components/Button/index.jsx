import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";
import { Actions } from '../../Reducer';

const Button = () => {
  const context = useContext(GlobalContext);

  return (
    <button onClick={() => context.dispatch({ type: Actions.ADD_COUNTER })}>Click</button>
  );
}

export default Button;