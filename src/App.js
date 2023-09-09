/* eslint-disable no-undef */
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About1 from "./components/About1";
import Navbar1 from "./components/Navbar1";
import TextFrom from "./components/TextFrom";
import PropTypes from "prop-types";
import Alert from "./components/Alert";

function App() {
  const [mode, newmode] = useState("light");
  const [sName, sNewName] = useState("Light Mode");

  function press() {
    if (mode === "light") {
      newmode("dark");
      sNewName("Dark Mode");
      alert("DARK MODE IS ON");
      document.body.style.backgroundColor = "#434343"; //black color sed
    } else {
      newmode("light");
      sNewName("Light Mode");
      alert("LIGHT MODE IS ON");
      document.body.style.backgroundColor = "#E4E4E4"; //white color shed
    }
  }

  return (
    <>
    
      <BrowserRouter>
      <Navbar1
            home="Home"
            title="WORD"
            about1="About"
            switchName={sName}
            buttonName={press}
            theam={mode}
          />
          <div className="container my-4">
        <Routes>
          
            <Route path="/About" element={<About1 theam={mode} />}></Route>
            <Route
              path="/Home"
              element={
                <TextFrom
                  textarea=""
                  button1="Convert to UpperCase"
                  button2="Convert to LowerCase"
                  button3="Reverse"
                  button4="Reset"
                  header_box="Preview"
                  theam={mode}
                />
              }
            ></Route>
            
        </Routes>
        </div>
      </BrowserRouter>
      <Alert Alert={alert} />
    </>
  );
}

export default App;

//default props//

Navbar1.defaultProps = {
  title: "Page Title",
  about: "About here",
  Link: "Enter links here",
};

TextFrom.defaultProps = {
  textarea: "Write text here...",
  button1: "enter name of the button1",
  button2: "enter name of the button2",
  button3: "enter name of the button3",
  header_box: "box_hrader",
};
//props types//

Navbar1.propTypes = {
  title: PropTypes.string.isRequired,
  Link: PropTypes.string.isRequired,
};

TextFrom.propType = {
  textarea: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
  button3: PropTypes.string.isRequired,
};