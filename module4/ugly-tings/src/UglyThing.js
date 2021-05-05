// // // similar to todo list where we'll insert our own data

import React, { Component } from "react"
import {ContextConsumer} from "./Context"


class UglyThing extends Component {

    handleDelete = (id) => {
        this.props.deleteUglyThing(id)
    }

    render(){
        const {description, imgUrl, title} = this.props


        return(
            <ContextConsumer>
                {context=>(
                    <div>
                        <h3>{title}</h3>
                        <img src={imgUrl} alt={description}></img>
                        <button onClick={() => this.handleDelete(context.delete)}>Delete</button>
                        <button>Edit</button>                    
                    </div>
                    
                )}

            </ContextConsumer>
        )

    }
}

export default UglyThing