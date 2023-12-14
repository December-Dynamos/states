import React, {useState} from "react"; 


const Async = () => {
    const [count,setCount] = useState(1)  // 2
    const [sum, setSum] = useState(0)

     function increase() {
        console.log("count",count) // 0 => sync
        setCount(count + 1) // 1 => async
        console.log("count",count) // 0 => sync

        // setCount(++count)
     }
     
     function increase1(value){ // 100

        setCount(count * value)  // 100
        setSum(sum+count)  // 1

     }

     function increase3(){
        setCount(count+1)
        setCount(count+1)
     }

     function increase2(){
        setCount((count)=>count+1)
        setCount((count)=>count+1)
     }


     function increase4(){ // why?
        setCount(()=>count+1)
        setCount(()=>count+1)
     }


     function increase5(){
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
     }

     // count = 1, sum = 0
     function increase6(){
         let ans = count+100
         setCount(ans) // 101
         setSum(sum+ans) //  101
     }


 
     return(
         <div>
             <h1>Count : {count} ,  sum:{sum}</h1>
             <button onClick={increase6}>Increment</button>
         </div>
     )
 }

export default Async;