import {useState} from 'react'

import React from 'react'

export default function TextForm(props) {
//All the JavaScript functions that will be used


  //If something is cahnged in the textarea, below function will be called
    const handleOnChange=(event)=>{
        console.log("ON CHANGE");
        setText(event.target.value);
    }
    //handleUpClick() --> convert text to uppercase
    const handleUpClick=()=>{
        console.log("UpperCase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    //handleLowClick() --> convert text to lowercase
    const handleLowClick=()=>{
        console.log("UpperCase Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }
    //handleCopy() --> copy the text in the textarea
    const handleCopy = () => {
      navigator.clipboard.writeText(text); 
      props.showAlert("Copied to Clipboard!", "success");
      props.showAlert("Copied Text to Clipboard", "success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleReverse = (event) => {
      /* Convert string to array*/
      let strArr = text.split("");
      /* Reverse array*/
      strArr = strArr.reverse();
      /* Convert array to string*/
      let newText = strArr.join("");
      setText(newText);
    };
    //A sate text, and it is initialized to empty
    const[text,setText] = useState("");
  return (
    <form>
        <div className="container mt-3" style={{backgroundColor: props.mode==='dark'?'#323131ad':'white',color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" placeholder='Start Typing...' style={{backgroundColor: props.mode==='dark'?'#323131ad':'white',color: props.mode==='dark'?'white':'black'}} value={text} rows="8" onChange={handleOnChange}/>
        <button type="button" className="btn btn-primary mt-2 my-2" onClick ={handleUpClick}>UpperCase</button>
        <button type="button" className="btn btn-primary mt-2 my-2 mx-2" onClick ={handleLowClick}>LowerCase</button>
        <button type="button" className="btn btn-primary mt-2 my-2" onClick ={handleCopy}>Copy</button>
        <button type="button" className="btn btn-primary mt-2 my-2 mx-2" onClick ={speak}>Speak</button>
        <button type="button" className="btn btn-primary mt-2 my-2" onClick ={handleReverse}>Reverse</button>
        </div>
    </form>
  )
}
