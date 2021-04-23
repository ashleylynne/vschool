// // // similar to todo list where we'll insert our own data

import React, { Component } from "react"
import UglyThingsList from "./UglyThingsList"

const UglyThing = () => {
    const {description, img, title} = this.props
    return(
        <div>
            <h1>{title}</h1>
            <img>{img}</img>
            <p>{description}</p>
        </div>
    )
}

export default UglyThing