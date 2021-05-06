// // // similar to todo list where we'll insert our own data

import React, { Component } from "react"
import {ContextConsumer} from "./Context"


class UglyThing extends Component {
    state = {
        editMode: ""
    }

    handleEditMode = () => {
        this.setState({editMode: true})
        console.log("edit mode!")
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submitNewEdit = (e, thing, title, description, imgUrl, putThing) => {
        e.preventDefault()
        const newThingObj = {
            "thing": thing,
            "title": title,
            "description": description,
            "imgUrl": imgUrl
        }
        putThing(newThingObj)
        // ^^ getting an error that this is not a function when i submit
    }

    render(){
        const {description, imgUrl, title, _id} = this.props
        if(this.state.editMode) {
            return(
            <ContextConsumer>
                {context =>(
                    <div className="edit-form-container">
                        <form className="edit-form" onSubmit={e => this.submitNewEdit(e, context.edit)}>
                            <input
                                type = "text"
                                placeholder = "title"
                                value={this.state.name}
                                onChange={this.handleChange}
                            >
                            </input>
                            <input
                                type= "text"
                                placeholder="description"
                                value={this.state.name}
                                onChange={this.handleChange}
                            >
                            </input>
                            <input
                                type="text"
                                placeholder="imgUrl"
                                value={this.state.name}
                                onChange={this.handleChange}
                            >
                            </input>
                            <button>Submit New Thing</button>
                        </form>
                    </div>
                )}
            </ContextConsumer>
            )
        }
        return(
            <ContextConsumer>
                {context=>(
                    <div>
                        <h3>{title}</h3>
                        <img src={imgUrl} alt={description}></img>
                        <button onClick={() => context.delete(_id)}>Delete</button>
                        <button onClick={this.handleEditMode}>Edit</button>                   
                    </div>                    
                )}
            </ContextConsumer>
        )
    }
}

export default UglyThing