import React,{useState} from 'react'

export default function Textform(props) {
    const handleupClick = () =>{
        //console.log("Button uppercase cliked",Text);
        let newText = Text.toUpperCase();
        SetText(newText);
        props.showAlert("converted to Uppercase","success");
    }

    const handleclearClick = () =>{
        SetText("");
        props.showAlert("text has benn cleared","success");
    }
    const handlecopy = () =>{
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("text copied to clipboard","success");
    }

    const handleExtraspace = () =>{
        let newText = Text.split(/[ ]+/);
        SetText(newText.join(" "));
        props.showAlert("extra spaces are removed","success");
    }

    const handleloClick = () =>{
        //console.log("Button uppercase cliked",Text);
        let newText = Text.toLowerCase();
        SetText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        SetText(event.target.value);
    }
    const [Text,SetText] = useState("");
  return (
<>
    <div className="container">
       <h1 style={{color: props.mode==='dark'?'white':'black'}}>this is the text utils</h1>
       <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white',color: props.mode=== 'dark'?'white':'black'}} id="mybox" rows="8"></textarea><br /><br />
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra Space</button>
       </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>it will take {0.008 * Text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{Text.length>0 ? Text:"enter the text in description to use it..."}</p>
    </div>
</>
    
  )
}
