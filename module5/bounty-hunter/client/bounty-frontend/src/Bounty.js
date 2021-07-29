import React, {useContext, useState} from "react"
import { Context } from "./contextProvider"
import BountyForm from "./BountyForm"

function Bounty(){
    
    const {bounty, handleSubmit, handleDelete, handleUpdate, setBounty, setUserBounty} = useContext(Context)
    const [editToggle, setEditToggle] = useState(false)
    console.log(bounty._id)
    return(
        <div className="bounty-container">
            <div className="bounties">
                { !editToggle ?
                <>
                <h3 className="name">
                    <span>
                        {bounty.firstName}&nbsp;
                    </span>
                    <span>
                        {bounty.lastName}
                    </span>
                </h3>
                <p>{bounty.type}</p>
                <p>{bounty.bountyAmount} credits</p>
                
                <button onClick={handleSubmit}>get bounty</button>
                <button className="buttons" onClick={() => handleDelete(bounty._id)}>delete bounty</button>
                <button 
                    className="edit-btn" 
                    onClick={(e) => {
                        const children = e.target.parentElement.children
                        setUserBounty({
                            firstName: children[0].children[0].innerText,
                            lastName: children[0].children[1].innerText,
                            type: children[1].innerText,
                            amount: children[2].innerText,
                            id: bounty._id
                        })
                        setEditToggle(prevToggle => !prevToggle)
                        }}>
                    Edit
                </button>
                </>
                :
                <>
                    <h3>{bounty.firstName} {bounty.lastName}</h3>
                    <p>{bounty.type}</p>
                    <p>{bounty.bountyAmount} credits</p>
                <BountyForm
                    firstName = {bounty.firstName}
                    lastName = {bounty.lastName}
                    amount = {bounty.amount}
                    submit = {(e) =>{
                        e.preventDefault()
                        handleUpdate(bounty._id)
                        setBounty({
                            firstName: "",
                            lastName: "",
                            type: "",
                            amount: "",
                            id: ""
                        })
                    }}
                />
                <button className="buttons" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
                </>
                } 
            </div>
        </div>
    )
}


export default Bounty