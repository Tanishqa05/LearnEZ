import { useState } from "react";

import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <SignUp />
    </>
  );
}

export default App;
