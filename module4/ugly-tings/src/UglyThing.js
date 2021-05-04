// // // similar to todo list where we'll insert our own data

import React from "react"


const UglyThing = (props) => {
    const {description, imgUrl, title} = props
    return(
        <div>
            <h3>{title}</h3>
            <img src={imgUrl} alt={description}></img>
            <p>{description}</p>
        </div>
    )
}

export default UglyThing