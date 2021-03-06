import React, {useContext} from "react"
import { Context } from "./contextProvider"

function BountyForm(props){

    const {handleChange, userBounty} = useContext(Context)
    return(
        <div className="form-container">
            <form className="form" name="form" onSubmit={props.submit}>
                <input onChange={handleChange} type="text" value={userBounty.firstName} name="firstName" placeholder="first name"></input>
                <input onChange={handleChange} type="text" value={userBounty.lastName} name="lastName" placeholder="last name"></input>
                <select onChange={handleChange} value={userBounty.type} name="type">
                    {/* <option>select type</option> */}
                    <option value="sith">sith</option>
                    <option value="jedi">jedi</option>
                </select>
                <input onChange={handleChange} type="number" value={userBounty.bountyAmount} name="bountyAmount" placeholder="credits"></input>
                <input onChange={handleChange} type="radio" value={true} name='isAlive'></input> Alive
                <input onChange={handleChange} type="radio" value ={false} name="isAlive"></input> Dead
                <button className="buttons" type="submit">submit</button>
            </form>
        </div>
    )
}

export default BountyForm
