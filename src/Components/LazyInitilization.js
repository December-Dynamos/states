import React,{useState} from "react";


function hello(){
    console.log("hello")
    return 0
}

const LazyInitilization = () => {
   const [count,setCount] = useState(()=>hello()) 

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default LazyInitilization;


// for(let i=0;i<5;i++){
//     console.log(i)
// }