import React ,{useState} from 'react'



export default function Textform(props) {
    const handelUpClick=()=>{
        // console.log('Conver to Upercase was Clicked' + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uperCase","success")
    } 
    const handelLoClick=()=>{
        // console.log('Conver to Lowercase was Clicked' + text);
        let newText=text.toLowerCase();
        setText(newText);
        
        props.showAlert("Converted to LowerCase","success")
    } 
    
    const handelClrClick=()=>{
        // console.log('ClearnaText Button  was Clicked' + text);
        let newText='';
        setText(newText);
        
        props.showAlert("Text cleared","success")
    } 
    const handelOnChange=(event)=>{
        // console.log('handelOnChange was Clicked')
        setText(event.target.value);
    }
    const handelcopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clip board","success")
    }
    const handleExtraspace = () =>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")
    }
   
    const [text, setText] = useState('');
    
    return (<>
    
        <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert to Upercase</button>
                
                <button className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelClrClick}>Clear Taxt</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraspace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelcopy}>Copy Taxt</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Sumarry</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
   
        </>
    )
}
