import React,{useState} from "react";


const Objects = () => {
    const [coins,setCoins] = useState({gold:0, silver:0, bronze:0})

    console.log("coins",coins) // {gold:0, silver:0, bronze:0} =>> {gold:1, silver:0, bronze:0}

    function incGold(){
        // setCoins({gold:coins.gold+1, silver:coins.silver, bronze:coins.bronze}) // 1
       setCoins({...coins, gold:coins.gold+1}) // 2
    }


    return(
        <div>
           <h1>Gold : {coins.gold} Silver: {coins.silver}  Bronze: {coins.bronze} </h1>
           <button onClick={incGold}> Gold </button>
           <button onClick={()=>setCoins({...coins, silver: coins.silver+1})}> Silver </button>
           <button onClick={()=>setCoins({...coins, bronze: coins.bronze+1})}> Bronze </button>
        </div>
    )
}

export default Objects;




// coins = {gold:0, silver:0, bronze:0}
// coins = 1
