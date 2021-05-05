// // // similar to todo list where we'll insert our own data

import React, { Component } from "react"
import {ContextConsumer} from "./Context"


class UglyThing extends Component {
    render(props){
        const {description, imgUrl, title} = this.props
    
        // handleDelete = e => {
        //     console.log("delete")
        // }
    
        return(
            <ContextConsumer>
                {context=>(
                    <div>
                        <h3>{title}</h3>
                        <img src={imgUrl} alt={description}></img>
                        <button onClick={context.delete}>Delete</button>
                        <button>Edit</button>                    
                    </div>
                    
                )}

            </ContextConsumer>
        )

    }
}

export default UglyThing