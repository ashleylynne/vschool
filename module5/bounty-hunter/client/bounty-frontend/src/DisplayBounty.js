import React, { useContext, useState } from "react"
import { Context } from "./contextProvider"
import EditForm from "./EditForm"


function DisplayBounty(props) {
    const {handleDelete, handleUpdate, handleChange, userBounty, setUserBounty} = useContext(Context)
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bounty-container">
            { !editToggle ?
            <div className="bounties">
                <h3 className="name">
                    <span className="first-name"> 
                        {props.bounty.firstName}&nbsp;  
                    </span> 
                     <span className="last-name"> 
                        {props.bounty.lastName}
                    </span>
                </h3>
                <p>{props.bounty.type}</p>
                <p>{props.bounty.bountyAmount}</p>
                <p>{props.bounty.isAlive}</p>
                <button onClick={(e) =>{
                    e.preventDefault()
                    const children = e.target.parentElement.children
                    setUserBounty({
                        firstName: children[0].children[0].innerText,
                        lastName: children[0].children[1].innerText,
                        type: children[1].innerText,
                        amount: children[2].innerText,
                        isAlive: children[3].innerText,
                        id: props.bounty._id
                    })
                    setEditToggle(prevToggle => !prevToggle)
                    }}
                >
                    edit
                </button>
                <button className="buttons" onClick={handleDelete}>delete</button>
            </div>
            :
            <>
                <h3 onChange={handleChange}>{props.bounty.firstName} {props.bounty.lastName}</h3>
                <p onChange={handleChange}>{props.bounty.type}</p>
                <p onChange={handleChange}>{props.bounty.amount}</p>
                <EditForm
                    firstName = {userBounty.firstName}
                    lastName = {userBounty.lastName}
                    amount = {userBounty.amount}
                    submit = {(e) =>{e.preventDefault() 
                        handleUpdate(props.bounty._id)
                        setUserBounty({
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
    )
}


export default DisplayBounty
