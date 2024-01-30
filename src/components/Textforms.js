import React, { useState } from 'react'



export default function Textforms(props) {

 

  const handleUpClick=()=>{
    console.log("up case");
    let newtext=text.toUpperCase();
    setText(newtext);
    if(newtext!=='')
    props.showAlert("Text converted to Uppercase","success");
    else
    props.showAlert("Please enter Text","warning");


  }

  const handleOnChange=(event)=>{
    console.log("onchange ");
    setText(event.target.value)
  }
  const handleLowClick=()=>{
    let lowtext=text.toLocaleLowerCase();
    setText(lowtext);
    if(lowtext!=='')
    props.showAlert("Text converted to lowercase","success");
    else
    props.showAlert("Please enter Text","warning");

  }


  const [text,setText]=useState('');
  
  return (
    <>
    <div className='container'>

<h1 >{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
</div>

<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>

<button className='btn btn-primary mx-2' onClick={handleLowClick} >Convert to lowercase</button>

    </div>
    <div className="container my-2">
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} words and {text.length} of characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
