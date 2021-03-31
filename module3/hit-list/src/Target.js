import React from "react"


function Target(props) {
    return(
        <div>
            <img alt="image" src={props.image}/>
            <h3>{props.name}</h3>

        </div>
    )
}

export default Target