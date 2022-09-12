import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="about us" />
      <div className="container my-3">
        <TextForm heading="Enter your comment" />
        <About />
      </div>
    </>
  );
}

export default App;
