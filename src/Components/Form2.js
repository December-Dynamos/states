import React,{useState} from "react";


const Form2 = () => {
    const [text,setText] = useState("") // ""

    console.log("text",text) 
    
    const [btnClick,setBtnClick] = useState("")  // "ramesh"


    function implementSubmit(event){
            event.preventDefault() // to prevent the default behaviour of the form
            // setBtnClick(true)
            setBtnClick(text) // "ramesh"
            setText("") 
     }

    return(
        <div>
            <form onSubmit={implementSubmit}>
                <input type="text" placeholder="Type anything..."
                  onChange={e => {
                    setText(e.target.value)
                    setBtnClick("")
                }} 
                  value={text}
                />
                <button type="submit">Submit</button>
            </form>
            <p>{btnClick}</p>
        </div>
    )
}

export default Form2;



// Uncontrolled and controlled components