import React,{useState} from "react"

const Fruits = () => {
   const [fruits,setFruits] = useState(["apple","banana","orange"])
   const [newFruit,setNewFruit] = useState("")
   
  console.log("newFruit",newFruit)  
  console.log("fruits",fruits)
 
  function updateFruits(e){
        e.preventDefault()
       setFruits([...fruits, newFruit])
         setNewFruit("")

  }

    return(
        <div>
            <form onSubmit={updateFruits}>
                  <input type="text"   placeholder="Enter a fruit" 
                   onChange={e=>setNewFruit(e.target.value)}
                   value={newFruit}
                  />


                    <button type="submit">Submit</button>
            </form>
             <br />
            {/* {
                 fruits.join(",")
            } */}
            <ol>
            {
                fruits.map(item=>(
                    <li>{item}</li>
                ))
            }
            </ol>

        </div>
    )
}

export default Fruits;