//I got this by typing rfc means react function component while typing you will see intellisence.

import React, {useState} from 'react';

//mera ek variable hai 'text' jiski default value hai 'Enter text here' aur jab bhi main iska text update karoonga tab main iss function ke through karoonga setText. 

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    //Text box ko clear karta hai.
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared.", "success");

    }

    //Text ko sound mein convert karta hai, aur bolta hai.
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text to speech is enabled.", "success");

    }

    const handleOnChange = (event)=>{
        // console.log('on change');
        setText(event.target.value);
    }

     //Text box mein se text clipboard mein copy karta hai.
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard.", "success");

    }

     //Text box mein se Extra Spaces remove karta hai.
    const handleExtraSpaces = ()=>{
        let myArray = text.split(/[ ]+/);
        setText(myArray.join(" "));
        props.showAlert("Extra spaces removed.", "success");

    }

    const [text, setText] = useState('');
    // text = "new text";  //wrong way to change the state
    // setText("new text");  //correct way to change the state

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* {kyunki hum yahaa state variable 'value={text}' use kar rahe hain iss liye hum 'onChange' event ko listen kar rahe hai. nahi toh hum textarea mein type nahin kar paate.} */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary:</h2>
            <p>{text.split(" ").length} words, {text.length} characters.</p>
            <p>{(0.008 * text.split(" ").length)} Minutes to read.</p>
            <h2>Preview:</h2>
            <p id="justify">{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
        </div>
        </>
    )
}
