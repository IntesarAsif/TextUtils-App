import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const clearText=()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text has been Cleared!", "success")
    }
    const handleCapitalizedCase = () => {
        let newText = text.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
        props.showAlert("Text has been Capitalized!", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("byBox");
        text.select();
        navigator.clipboard.writeText("text.value");
        props.showAlert("Text has been Copied!", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Text has been Removed!", "success")
      }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText="new text";     //wrong way to change the text
    // setText("New Text");        //correct way to change the text
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
                        color:props.mode==='dark'?'white':'#042743'}} id="byBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalizedCase}>Capitalize Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
            </div>

            <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words, and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something above to preview it"}</p>
            </div>
        </>
    )
}
