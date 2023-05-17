import React, {useState} from 'react'


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

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // setText("gvdfbfghfgf")
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} value= {text} rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
