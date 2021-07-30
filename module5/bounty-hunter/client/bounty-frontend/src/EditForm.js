import React, { useContext } from "react"
import {Context} from "./contextProvider"



function EditForm(props) {
    const {handleChange, userBounty} = useContext(Context)
    return(
        <div className="edit-form-container">
            <form className="edit-form" onSubmit={props.submit}>
                <input onChange={handleChange} type="text" value={userBounty.firstName} name="firstName" ></input>
                <input onChange={handleChange} type="text" value={userBounty.lastName} name="lastName" ></input>
                <select onChange={handleChange} value={userBounty.type} name="type">
                    <option value="sith">sith</option>
                    <option value="jedi">jedi</option>
                </select>
                <input onChange={handleChange} type="number" value={userBounty.bountyAmount} name="bountyAmount"></input>
                <input onChange={handleChange} type="radio" value={true} name='isAlive'></input> Alive
                <input onChange={handleChange} type="radio" value ={false} name="isAlive"></input> Dead
                <button type="submit">submit edit</button>
            </form>
        </div>
    )

}


export default EditForm