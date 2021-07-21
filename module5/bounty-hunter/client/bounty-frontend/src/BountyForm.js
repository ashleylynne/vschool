import React, {useContext} from "react"
import { Context } from "./contextProvider"

function BountyForm(){

    const {handlePost, handleChange, name} = useContext(Context)
    return(
        <>
            <form name="form" value={name}>
                <input onChange={handleChange} type="text" value={name} name="firstName" placeholder="first name"></input>
                <input onChange={handleChange} type="text" value={name} name="lastName" placeholder="last name"></input>
                <select>
                    <option value="sith" name="type">sith</option>
                    <option value="jedi" name="type">jedi</option>
                </select>
                <input onChange={handleChange} type="number" value={name} name="bountyAmount" placeholder="credits"></input>
                <input onChange={handleChange} type="radio" value={true} name='isAlive'></input> Alive
                <input onChange={handleChange} type="radio" value ={false} name="isAlive"></input> Dead
            </form>
                <button onChange={handleChange} type="submit" onClick={handlePost}>new post</button>
        </>
    )
}

export default BountyForm
