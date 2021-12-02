import React from "react"


export default function Issue(props){
    const {
        title,
        description,
        _id
    } = props

    return(
        <div className= "issue">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}