import { useState } from "react";

import "./App.css";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import AllCourses from "./Pages/AllCourses";
import ManageProfile from "./Pages/ManageProfile";
import ResourcePage from "./Pages/ResourcePage";
import CreateCourse from "./Pages/CreateCourse";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <Home />
      </div>
    </>
  );
}

export default App;
