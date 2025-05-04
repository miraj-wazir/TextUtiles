import React, {useState, useRef} from 'react'

const TextForm = (props) => {

  const [text,setText] = useState("Enter Text Here");
  const textRef = useRef(null);
  
  const handleToUppercase = () =>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert('Convert To Uppercase', 'success: ')
  }
  // const handleOnChange = (event) =>{
  //   setText(event.target.value)
  // }
  return (
    <>
    <div className='container'  style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>{props.heading}</h2>
        <textarea ref={textRef} style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40',color: props.mode === 'light' ? 'black' : 'white'}} name="myText" id="mybox" value={text} onChange={(event) => {setText(event.target.value)}} className='form-control' rows ="8"></textarea>
        <button className="btn btn-primary my-2" onClick={handleToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={()=>{
          let lowerCase = text.toLowerCase();setText(lowerCase)
          props.showAlert('Convert to Lowercase')
          ;
        }}>Convert to Uppercase</button>
        <button className="btn btn-warning my-2 mx-1" onClick={()=>{
          textRef.current.select()
          props.showAlert('Your Text Has been selected', 'success: ')}}>Select All</button>
        <button className="btn btn-success my-2 mx-1" onClick={()=>{
          navigator.clipboard.writeText(text); alert("Copy to Clipboard")
          props.showAlert("Copy To Clipboard") 
          }}>Copy All</button>
        <button className="btn btn-danger my-2" onClick={()=>{
          setText('')
          props.showAlert("Your Texts Clear") 
          }}>Clear</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}</p>
    </div>
    </>
  )
}

export default TextForm
