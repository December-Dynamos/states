import React,{useState} from "react"

// console.log("I am outside the component")

let x = 10

const Basics = () => {
   let [a,fun1] = useState(200) // a = `200` , fun1 = `function`

    function increase(){
           fun1(a+1)
    }


    console.log("Hey how are you")

    function incX(){
        x = x + 1
        console.log(x) 
    }



    return(
        <div>
              
              <h1>{a}</h1>
              <button onClick={increase}> IncreaseA </button>

             <h1>{x}</h1>
            <button onClick={incX}> IncreaseX </button>

              
        </div>
    )
}

export default Basics;




// let a = 10 
// function increase(){
//     a = a + 1
//     console.log(a)
// }


// reload , re-render