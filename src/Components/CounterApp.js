import React,{useState} from "react";




const CounterApp = () => {
    
    const [count, setCount] = useState(0) 
      

      function increase(){
           setCount(count+1)
      }

    return(
        <div>
                <h1>{count}</h1>
              <button onClick={increase}>Incremenet</button>

              <button onClick={()=>setCount(count-1)}>Decrement</button>


              <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default CounterApp;



// x => setX 
// hello => setHello
// helloWorld => setHelloWorld