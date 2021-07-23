import React, { useContext } from "react"
import { Context } from "./contextProvider"


function DisplayBounty(props) {
    const {handleDelete} = useContext(Context)
    return(
        <div>
            <h3>{props.bounty.firstName} {props.bounty.lastName}</h3>
            <p>{props.bounty.type}</p>
            <p>{props.bounty.amount}</p>
            <button>edit</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}



export default DisplayBounty
