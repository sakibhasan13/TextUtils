import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="about us" />
      <div className="container my-3">
        <TextForm heading="Enter your comment" />
      </div>
    </>
  );
}

export default App;
