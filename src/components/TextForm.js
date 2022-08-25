import React, {useState} from 'react'

export default function TextForm(props) {
 const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    setText(text.toUpperCase())
    props.showAlert("Converted to UPPERCASE", "success")
 }

 const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    setText(text.toLowerCase())
    props.showAlert("Converted to lowercase", "success")
 }

 const handleTextClear = () =>{
    // console.log("Uppercase was clicked" + text);
    setText('')
    props.showAlert("Texts cleared", "success")
 }

 const handleCopy = () =>{
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Texts copied", "success")
 }

 const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")
 }

 const handleOnChange = (event) =>{
    // console.log("On Change")
    setText(event.target.value)
 }

  const [text, setText] = useState("")
//   text("ahsdhvsdh")   //Wrong way to change the state
    //   setText("asjgdhsas")   //Correct way
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleTextClear}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
