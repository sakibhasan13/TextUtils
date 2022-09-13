import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        mode={mode}
        title="TextUtils"
        about="about us"
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter your comment" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
