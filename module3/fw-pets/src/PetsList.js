import React from "react"

export default function PetsList(props){
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.breed}</p>
        </div>
    )
}

