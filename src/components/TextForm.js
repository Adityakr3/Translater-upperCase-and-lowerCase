import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick1=()=>{
         let newText=text.toLowerCase();
         setText(newText)
    }
    const handleOnchange=(event)=>{
        setText(event.target.value);
        
    }
    const[text , setText]=useState('Enter your text here');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="18"></textarea>
      </div>
      <button className="btn btn-info " onClick={handleUpClick} >Convert to UpperCase</button>
      <button className="btn btn-info mx-5" onClick={handleLoClick1} >Convert to LowerCase</button>
    </div>
    <div className="container">
         <h1>Your text summary here</h1>
         <p>{text.split(" ").length} Words and {text.length} Characters </p>
    </div>
    </>
  )
}
