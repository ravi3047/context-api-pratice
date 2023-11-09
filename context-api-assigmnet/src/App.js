import { createContext } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

const data = createContext();

function App() {
  const name = "Ravi kumar";
  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  );
}

export default App;
export { data };
