import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
    }

    const handleCopy = () => {
        let newText = document.getElementById('myBox')
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // setText("gvdfbfghfgf")
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#353740' : 'white' }} onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button className={props.mode === 'dark' ? "btn btn-outline-info my-1" : "btn btn-info my-1"} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={props.mode === 'dark' ? "btn btn-outline-info my-1 mx-1" : "btn btn-info my-1 mx-1"} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={props.mode === 'dark' ? "btn btn-outline-info my-1 mx-1" : "btn btn-info my-1 mx-1"} onClick={handleCopy}>Copy text</button>
                <button className={props.mode === 'dark' ? "btn btn-outline-info my-1 mx-1" : "btn btn-info my-1 mx-1"} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className={props.mode === 'dark' ? "btn btn-outline-info my-1 mx-1" : "btn btn-info my-1 mx-1"} onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here"}</p>
            </div>
        </>
    )
}
