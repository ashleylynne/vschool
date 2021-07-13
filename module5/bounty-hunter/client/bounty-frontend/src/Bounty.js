import React, {useContext} from "react"
import { Context } from "./contextProvider"

function Bounty(){
    
    const {bounty, handleSubmit, handleDelete} = useContext(Context)
    console.log(bounty._id)
    return(
        <div className="bounties">
            <h3>{bounty.firstName} {bounty.lastName}</h3>
            <p>{bounty.type}</p>
            <p>{bounty.bountyAmount} credits</p>
            
            <button onClick={handleSubmit}>get bounty</button>
            <button onClick={() => handleDelete(bounty._id)}>delete bounty</button>
        </div>
    )
}



export default Bounty