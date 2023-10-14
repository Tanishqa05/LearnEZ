import { useState } from "react";

import "./App.css";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import AllCourses from "./Pages/AllCourses";
import ManageProfile from "./Pages/ManageProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ManageProfile />
    </>
  );
}

export default App;
