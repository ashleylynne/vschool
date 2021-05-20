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

    submitNewEdit = (e, _id, putThing) => {
        e.preventDefault()
        const newThingObj = {
            "_id": _id,
            "title": this.state.title,
            "description": this.state.description,
            "imgUrl": this.state.imgUrl
        }
        putThing(newThingObj)
        this.setState({
            editMode: false
        })
    }

    render(){
        const {description, imgUrl, title, _id} = this.props
        if(this.state.editMode) {
            return(
            <ContextConsumer>
                {context =>(
                    <div className="edit-form-container">
                        <form className="edit-form" onSubmit={e => this.submitNewEdit(e, _id, context.edit)} autoComplete="off">
                            <input
                                type = "text"
                                placeholder = "title"
                                name = "title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            >
                            </input>
                            <input
                                type= "text"
                                placeholder="description"
                                name = "description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            >
                            </input>
                            <input
                                type="text"
                                placeholder="imgUrl"
                                name = "imgUrl"
                                value={this.state.imgUrl}
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
                        <h3 className="h3">{title}</h3>
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