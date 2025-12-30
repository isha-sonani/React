import React,{useState} from 'react'

export default function Textform(props) {
    const handleupClick = () =>{
        //console.log("Button uppercase cliked",Text);
        let newText = Text.toUpperCase();
        SetText(newText);
    }

    const handleloClick = () =>{
        //console.log("Button uppercase cliked",Text);
        let newText = Text.toLowerCase();
        SetText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        SetText(event.target.value);
    }
    const [Text,SetText] = useState("enter text here");
  return (
<>
    <div className="container">
       <h1>{props.heading}</h1>
       <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" rows="8"></textarea><br /><br />
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To Lowercase</button>
       </div>
    </div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>it will take {0.008 * Text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{Text}</p>
    </div>
</>
    
  )
}
