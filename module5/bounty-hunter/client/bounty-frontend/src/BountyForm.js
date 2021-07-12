import React, {useContext} from "react"
import { Context } from "./contextProvider"

function BountyForm(){

    const {handlePost} = useContext(Context)

    return(
        <div>
            <form>
                <input type="text" placeholder="first name"></input>
                <input type="text" placeholder="last name"></input>
                <select>
                    <option>sith</option>
                    <option>jedi</option>
                </select>
                <input type="number" placeholder="credits"></input>
                <input type="radio" value="Alive" name="isAlive"></input> Alive
                <input type="radio" value = "Dead" name="isAlive"></input> Dead
            </form>
                <button type="submit" onSubmit={handlePost}>submit</button>
        </div>
    )
}


export default BountyForm