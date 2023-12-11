import React,{useState} from "react"

const Fruits = () => {
   const [fruits,setFruits] = useState(["apple","banana","orange"])


    return(
        <div>
            <form>
                  <input type="text" placeholder="Enter a fruit" />
                    <button type="submit">Submit</button>
            </form>

            {/* display the value of fruits in the array */}
        </div>
    )
}

export default Fruits;