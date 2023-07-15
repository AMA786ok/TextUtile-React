import React, { useState } from "react";

export default function Text(props) {

  const [text, setText] = useState("");

  const clicked = () => {
    // console.log("handel on clicked " + text);
    var newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To Upper Case", "success ");
  };

  const lowwer = () => {
    // console.log("handel on clicked " + text);
    var newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To Lower Case", "success ")
  };

  const Change = (event) => {
    // console.log("handel on Change");
    setText(event.target.value)
  };

  const clear=()=>{
    var newtext = "clean";
    setText(newtext);
    props.showAlert("Your All Text is Clear", "danger ")
  }
  const speak = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Your Message Is Speaked", "warning ")
  }
  const hadlecopy=()=>{
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your Message Is Copy", "warning ")

   }

   const handleTitleclick = () => {
    let camelCaseText = text.split(' ')
      .map(function (word, index) {
        return word.charAt(0)
          .toUpperCase() + word.slice(1)
            .toLowerCase();
      })
      .join(' ');
    setText(camelCaseText);
};
  return (
    <>
    <div className="container">
      <h1 className="text-center text-danger my-4">{props.heading}</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.subtitle}
          </label>
          <textarea className={"form-control lead"} style={{backgroundColor: props.mode=== "dark"?"gray": "white" , color: props.mode === "dark"?"white": "black" , backgroundColor: props.blue=== "blue"?"#abb0ed": "white" , color: props.blue === "blue"?"white": "black"}} id="exampleFormControlTextarea1" rows="8" value={text} onChange={Change}></textarea>
        </div>
        <button type="button" className="btn mx-1 btn-success" style={{backgroundColor: props.blue==="blue"?"#727ce8": "", color: props.blue==="blue"?"white": "" , border: props.blue==="blue"?"2px solid royalblue": " "}} onClick={clicked}>
          {props.submit}
        </button>
        <button type="button" className="btn mx-3 btn-danger my-2" style={{backgroundColor: props.blue==="blue"?"#727ce8": "", color: props.blue==="blue"?"white": " " , border: props.blue==="blue"?"2px solid royalblue": " "}} onClick={lowwer}>Convert to Lowercase</button>
        <button type="button" className="btn mx-3 btn-danger my-2" style={{backgroundColor: props.blue==="blue"?"#727ce8": "", color: props.blue==="blue"?"white": " " , border: props.blue==="blue"?"2px solid royalblue": " "}} onClick={handleTitleclick}>Convert to Upgrade Case</button>
        {/* <button type="button" className="btn mx-3 btn-danger" onClick={upgrade}>search email</button> */}
        <button type="submit" onClick={speak} style={{backgroundColor: props.blue==="blue"?"#727ce8": "", color: props.blue==="blue"?"white": " " ,border: props.blue==="blue"?"2px solid royalblue": " "}} className="btn btn-warning mx-2 my-2">Speak</button>
        <button type="button" className="btn mx-3 btn-warning my-2" style={{backgroundColor: props.blue==="blue"?"#727ce8": "", color: props.blue==="blue"?"white": " " , border: props.blue==="blue"?"2px solid royalblue": " "}} onClick={hadlecopy}>Copy all Text</button>
        <button type="button" className="btn mx-3 btn-danger my-2" style={{backgroundColor: props.blue==="blue"?"#727ce8": "", color: props.blue==="blue"?"white": " " , border: props.blue==="blue"?"2px solid royalblue": " "}} onClick={clear}>Clear all text</button>
      </form>
    </div>

    <div className="container my-3">
      <h2 className="text-success text-center">Your Text Sammery</h2>
      <p><b>{text.split(" ").length-1} Words and {text.length} Charcters </b></p>
      <p><b>{text.length>0?-text.split(" ").length + text.length: 0} Words without space</b></p>

      <p><b>{0.008 * text.split(" ").length} </b> Minutes Read</p>
      <h3 className="text-danger text-center">Preview</h3>
      <p> {text.length>0?text : "Enter Sometext For Preview Here"} </p>
      
    </div>

    </>
  );
}
