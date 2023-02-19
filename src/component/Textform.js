import { useState } from "react";



export default function Textform(props) {

    const handleClick=()=>{
        console.log("button clickked");
        let newt = text.toUpperCase();
        setText(newt)
    }
    const handleChange = (event)=>{
        setText(event.target.value)
    }


    const[text,setText] = useState(' ');
    return (
        <>
        <h1>{props.heading}</h1>
            <div className="mb-3">                
            <textarea className="form-control" id="mybox" value={text} onChange={handleChange} rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={handleClick}>UpperCase</button>
            </div>
        </>
    )
}
