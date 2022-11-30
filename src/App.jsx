import "./App.css";
import { HeaderCmp } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { AlertContainer } from "./components/Alert/Alert";
import Approutes from "./routes/routes";

function App() {
  return (
    <>
      <HeaderCmp />
      <Approutes />
      <AlertContainer />
    </>
  );
}

export default App;
