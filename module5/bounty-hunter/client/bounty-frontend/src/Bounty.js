import React, {useContext, useState} from "react"
import { Context } from "./contextProvider"
import BountyForm from "./BountyForm"

function Bounty(){
    
    const {bounty, handleSubmit, handleDelete, handleUpdate} = useContext(Context)
    const [editToggle, setEditToggle] = useState(false)
    console.log(bounty._id)
    return(
        <div className="bounties">
            { !editToggle ?
            <>
            <h3>{bounty.firstName} {bounty.lastName}</h3>
            <p>{bounty.type}</p>
            <p>{bounty.bountyAmount} credits</p>
            
            <button onClick={handleSubmit}>get bounty</button>
            <button onClick={() => handleDelete(bounty._id)}>delete bounty</button>
            <button 
                className="edit-btn" 
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
            </>
            :
            <>
            <BountyForm
                firstName = {bounty.firstName}
                lastName = {bounty.lastName}
                amount = {bounty.amount}
                submit = {handleUpdate}
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
            }
            
        </div>
    )
}


export default Bounty