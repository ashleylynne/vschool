import React, {useContext} from "react"
import { UserContext } from "../context/UserProvider"


export default function Issue(props){
    const {deleteIssue} = useContext(UserContext)
    const {
        title,
        description,
        _id
    } = props

    return(
        <div className= "issue">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={()=>deleteIssue(_id)}>X</button>
        </div>
    )
}