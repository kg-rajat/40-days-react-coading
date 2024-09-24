import React from 'react';
import { useState } from 'react';

const Textfom = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = ()=> {
    // console.log("UpperCase was clicked" + text);
   let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("convert to uppercase","success")
    }
  const handleLoClick = () =>{
     let newText = text.toLowerCase(); 
     setText(newText)
  }
  const handleclearClick = () =>{
    let newText = ("");
    setText(newText)
    alert("Do you really want to clear?");
    
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  // text = "new text" // wrong 
  // text = ("new text") // correct
  return (
    <>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3 my-4">
  <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}}
  placeholder="Enter here..." value={text} onChange={handleOnChange} rows="8"></textarea>
  <br/>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Click to uppercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Click to lowercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleclearClick}>Click to clear</button>

</div>
</div>
<div class="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
</div>
</>
  );
};

export default Textfom;


