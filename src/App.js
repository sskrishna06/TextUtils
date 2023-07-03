import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "TextUtils - light Mode";
    }
  };
  return (
    <>
      <Navbar Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter Your Text to Analyze"
          Mode={Mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
