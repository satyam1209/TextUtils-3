import React,{useState} from 'react'

export default function Textform(props) {
  const wordcount=()=>{
     let regex=/\s+\S+/;
     let newtext=text.split(regex)
     return newtext.length
  }
    const handleExtraClick=()=>{
      if (text.length===0){
        props.showalert("Enter something First","warning")
      }
      else{
        let newtext=text.split(/[ ]+/);
        
        setText(newtext.join(" "))
        props.showalert("removed Extra Spaces","success")
      }
     }
     
    const handleUpClick=()=>{
      if (text.length===0){
        props.showalert("Enter something First","warning")
      }
      else{
        // changing text to uppercase
        let newtext=text.toUpperCase();
        // setting newtext to the textarea
        setText(newtext);
        props.showalert("Text converted to UPPERCASE","success")
      }
    }
    const handleClearClick=()=>{
      if (text.length===0){
        props.showalert("Enter something First","warning")
      }
      else{
      setText("");
      props.showalert("Text cleared","success")
    }
  }
    const handleCapClick=()=>{
      if (text.length===0){
        props.showalert("Enter something First","warning")
      }
      else{
      let newtext=text.charAt(0).toUpperCase() + text.slice(1);
      setText(newtext);
      props.showalert("converted to capital","success")
    }
  }
    
    const handleOnChange=(event)=>{
        // console.log("onchange");
        // it allows us to write the text
        setText(event.target.value);
    }
    const[text,setText]=useState("");
  return (
    <div>
      <div className={`container text-${props.mode==="light"?'dark':'light'}`}><h1>{props.heading}</h1></div>
        
<div className="mb-3">
  <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="mytext" rows="6"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to Capatilize</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraClick}>Clear Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.length===0?0:wordcount(text)}words and {text.length} characters</p>
  <p>{text.length>0?0.008*text.length/8:0.000} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview"}</p>

  </div>
  </div>
  
  )
}
