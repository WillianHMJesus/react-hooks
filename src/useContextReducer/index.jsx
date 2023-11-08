import H1 from "./components/H1";
import Button from "./components/Button";
import { AppContext } from "./contexts/AppContext";

function ContextReducer() {

  return (
    <AppContext>
      <div>
        <H1 />
        <Button />
      </div>
    </AppContext>
  );
}

export default ContextReducer;