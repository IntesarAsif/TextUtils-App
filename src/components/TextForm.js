import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
        document.title = "TextUtils - Upper Case Coverted"
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
        document.title = "TextUtils - Lower Case Coverted"
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
        document.title = "TextUtils - Capitalized Case"
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
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
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
                        color:props.mode==='dark'?'white':'#042743'}} id="byBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizedCase}>Capitalize Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
            </div>

            <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, and {text.length} characters</p>
                <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something above to preview it"}</p>
            </div>
        </>
    )
}
