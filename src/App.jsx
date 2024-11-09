import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Loginfrom from "./Component/Loginfrom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Loginfrom></Loginfrom>
    </>
  );
}

export default App;
