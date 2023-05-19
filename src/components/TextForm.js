import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        text === "" ? props.showAlert("Enter some text", "warning") : props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        text === "" ? props.showAlert("Enter some text", "warning") : props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        text === "" ? props.showAlert("Enter some text", "warning") : props.showAlert("Text cleared!", "success")
    }

    const handleCopy = () => {
        let newText = document.getElementById('myBox')
        newText.select();
        navigator.clipboard.writeText(newText.value);
        text === "" ? props.showAlert("Enter some text", "warning") : props.showAlert("Copied to clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        text === "" ? props.showAlert("Enter some text", "warning") : props.showAlert("Extra spaces removed!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    const words = text.split(" ");
    let wordCount = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].trim() !== "")
            wordCount++;
    }

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
                <p>{wordCount} words, {text.length} characters</p>
                <p>{wordCount === 0 ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here"}</p>
            </div>
        </>
    )
}
