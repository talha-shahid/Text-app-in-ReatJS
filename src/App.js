import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import './Navbar.css';

function App() {
  //All JavaScript that will be used at the bottom 
  const [mode, setMode]= useState('light')  //whether dark mode is enabled or not
//toggleMode()--> change the Mode of the Website(dark-->light or light-->dark)
  const [alert, setAlert] = useState(null)

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#050A30";
      showAlert("Dark Mode enabled!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode enabled!", "success");
    }

  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
  }, 1000);
  }
  //react components with props
  return (
    <>

    <BrowserRouter>
    <Navbar title="Talha" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
    </Routes>
    </BrowserRouter>



    {/* <TextForm showAlert={showAlert} heading="Enter your Text here: " mode={mode}/> */}
    {/* <About/> */}
    </>
  );
}

export default App;
