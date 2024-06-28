import React, { useState } from 'react'

export default function Textform(props) {
    const handleClickUp =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success"); 
    }

    const handleClickdwn =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleclear =()=>{
        let newText = "";
        setText(newText);
    }

    const handleCopy = () =>{
        console.group("iam copy");
        var text = document.getElementById("myBox"); 
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+ /);
        setText(newText.join(" "))
    }


    const handleOnChange =(event) =>{
        setText(event.target.value);
    }


    const [text, setText] = useState('enter text here');
    // setText('new text');
    return (
        <>
        <div className='container'  style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#4b5258':'white', color: props.mode === 'dark'? 'white':'black'}}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClickUp}>Convert to uppercase</button>
        
            <button className="btn btn-primary mx-2" onClick={handleClickdwn}>Convert to Lowecase</button>

            <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>

            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>

            <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove extra spaces</button>


        </div>
        <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>

            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{0.008* text.split(" ").length} Minutes Read </p>
            <h3>Preview</h3> <p>{text.length>0 ? text : "Enter text to Preview" } </p>
        </div>
        </>
    )
}

