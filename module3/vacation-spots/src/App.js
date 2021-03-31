import React from "react"
import Spots from "./Spots"


function App(){
    const vacationData = Spots.map((spot, index) => 
        <div key={spot.place + index}>
            <h1>{spot.place}</h1>
            <p>Price: {spot.price.toLocaleString("en-US", {style: "currency", currency:"USD"})}</p>
            <p>Best time to go: {spot.timeToGo}</p>
        </div>    
    )
    return (
        <div>
            {vacationData}
        </div>
    )
}

export default App
