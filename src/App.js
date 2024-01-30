
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }

  const togglemode=()=>{
    showAlert("activated","succes")
  }
  return (
  <>
  <Router>
<Navbar title="TextUtils" togglemode={togglemode} ></Navbar>
<Alert alert={alert}></Alert>
<div className="container my-3">

        <Routes>
       
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Textforms heading="Enter text to analyse" showAlert={showAlert}></Textforms>} />
      </Routes>

        </div>
        </Router>


  </>
  );
}

export default App;
