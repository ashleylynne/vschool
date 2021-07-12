import React, {useContext} from "react"
import { Context } from "./contextProvider"

function BountyForm(){

    const {handlePost, handleChange, name} = useContext(Context)

    return(
        <div>
            <form name="form">
                <input onChange={handleChange} type="text" value={name} placeholder="first name"></input>
                <input onChange={handleChange} type="text" value={name} placeholder="last name"></input>
                <select>
                    <option>sith</option>
                    <option>jedi</option>
                </select>
                <input onChange={handleChange} type="number" value={name} placeholder="credits"></input>
                <input onChange={handleChange} type="radio" value="Alive" name="isAlive"></input> Alive
                <input onChange={handleChange} type="radio" value = "Dead" name="isAlive"></input> Dead
            </form>
                <button onChange={handleChange} type="submit" onClick={handlePost}>new post</button>
        </div>
    )
}


export default BountyForm