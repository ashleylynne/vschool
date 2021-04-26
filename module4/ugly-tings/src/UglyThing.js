// // // similar to todo list where we'll insert our own data

import React from "react"


const UglyThing = () => {
    const {description, imgUrl, title} = this.props
    return(
        <div>
            <h1>{title}</h1>,
            <img src={imgUrl} alt={description}></img>,
            <p>{description}</p>
        </div>
    )
}

export default UglyThing