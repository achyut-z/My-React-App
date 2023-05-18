// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  //#212529 hexcode for dark colour of navbar 
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#052640'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <About heading="About us"></About> */}
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
