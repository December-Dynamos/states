import React,{useState} from "react";


const Form1 = () => {
    const [text,setText] = useState("") // ab

    console.log("text",text) // a

    function getValue(event){
        //  console.log(event.target.value)
         setText(event.target.value) //ab
    }
   

    return(
        <div>
            <form>
                <input type="text" placeholder="Type anything..." 
                   onChange={getValue}
                />
            </form>
            <p>{text}</p>
        </div>
    )
}

export default Form1;