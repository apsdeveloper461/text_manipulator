import React from 'react'
import { useState } from 'react'

export default function TextForm() {
  const [text, setText] = useState("");
  const ChangeText=(event)=>{
      setText(event.target.value)
  }
  const convertToUpperCase=()=>{
    setText(text.toUpperCase());
  }
  const convertToLowerCase=()=>{
    setText(text.toLowerCase());
  }
  const clearAll=()=>{
    if(window.confirm("You want to clear it"))  setText("");
  }
  const removeAllWhiteSpace=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(' '));
  }
  const copyToClipboard=()=>{
    document.getElementById('formText').select();
    navigator.clipboard.writeText(text);
  }
  return (
   <>
   <div className="container">
   <h1 className='my-3'>Enter Text Here To Analyze : </h1>
    <textarea style={{outline:"none",fontSize:"16px", background:"#80808008"}} value={text} onChange={ChangeText} name="formText" className='text-l px-2 w-100'  id="formText" cols="100" rows="10" placeholder='Enter text here...'></textarea>
    <button className="my-2 btn btn-outline-primary" onClick={convertToUpperCase}>Convert to UpperCase</button>
    <button className="my-2 mx-2 btn btn-outline-primary" onClick={convertToLowerCase}>Convert to LowerCase</button>
    <button className="my-2 mx-2 btn btn-outline-danger" onClick={clearAll}>Clear All</button>
    <button className="my-2 mx-2 btn btn-outline-primary" onClick={removeAllWhiteSpace}>Remove White Space</button>
    <button className="my-2 mx-2 btn btn-outline-primary" onClick={copyToClipboard}>Copy To Clipboard</button>
    <h2 className='my-2'>Text Information :</h2>
    {/* i used for reading speed 150 wpm */}
    <p className='mx-4'><strong className='text-danger'>{text.split(/[ ]+/).length-1} Words and {text.length} Characters.</strong> You required {(((text.split(/[ ]+/).length-1)/150)*60).toPrecision(2)} second or {((text.split(" ").length-1)/150).toPrecision(2)} minute for reading</p>
    <h3 className='my-2'>Preview Text:</h3>
    <pre className='text-light'>    {text}</pre>
   </div>

    </>
  )
}
