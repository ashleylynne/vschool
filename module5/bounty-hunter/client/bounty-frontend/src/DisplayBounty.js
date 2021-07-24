import React, { useContext, useState } from "react"
import { Context } from "./contextProvider"
import EditForm from "./EditForm"


function DisplayBounty(props) {
    const {handleDelete, handleUpdate, handleChange, userBounty} = useContext(Context)
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div>
            { !editToggle ?
            <>
                <h3>{props.bounty.firstName} {props.bounty.lastName}</h3>
                <p>{props.bounty.type}</p>
                <p>{props.bounty.amount}</p>
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>edit</button>
                <button onClick={handleDelete}>delete</button>
            </>
            :
            <>
                <h3 onChange={handleChange}>{props.bounty.firstName} {props.bounty.lastName}</h3>
                <p onChange={handleChange}>{props.bounty.type}</p>
                <p onChange={handleChange}>{props.bounty.amount}</p>
                <EditForm
                    firstName = {userBounty.firstName}
                    lastName = {userBounty.lastName}
                    amount = {userBounty.amount}
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


export default DisplayBounty