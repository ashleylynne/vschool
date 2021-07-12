import React, {useContext} from "react"
import { Context } from "./contextProvider"




function Bounty(props){
    
    const {bounty, handleSubmit} = useContext(Context)

    return(
        <div className="bounties">
            <h3>{bounty.firstName} {bounty.lastName}</h3>
            <p>{bounty.type}</p>
            <p>{bounty.bountyAmount} credits</p>
            
            <button onClick={handleSubmit}>get bounty</button>
        </div>
    )
}



export default Bounty