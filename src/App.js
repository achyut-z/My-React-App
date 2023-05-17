// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <About heading="About us"></About>
        {/* <TextForm heading="Enter the text to analyze below" /> */}
      </div>
    </>
  );
}

export default App;
