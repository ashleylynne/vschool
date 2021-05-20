import React, { Component } from "react"
import {ContextConsumer} from "./Context"


class Form extends Component {

        state = {
            imgUrl: "",
            description: "",
            title: "",

        }

        handleChange = e => {
            const {name, value} = e.target
            this.setState({
                [name]: value
            })
            console.log(this.state)
        }

        handleSubmit = (e, postUglyThing) => {
            e.preventDefault()
            console.log("hi")
            const newThing = {
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                title: this.state.title
            }
            postUglyThing(newThing)
 
        }

        render(){
            const {title, description, imgUrl} = this.state
            
            return(
                <div className="form-container">
                    <ContextConsumer>
                    {context => (
                    <form className="form" onSubmit={e => this.handleSubmit(e, context.postUglyThing)} autoComplete="off">
                        <input 
                            type="text" 
                            placeholder="title"
                            name="title"
                            onChange={this.handleChange}
                            value={title}>
                        </input>
                        <input 
                            type="text" 
                            placeholder="description"
                            name="description"
                            onChange={this.handleChange}
                            value={description}>
                        </input>
                        <input 
                            type="text" 
                            placeholder="img url"
                            name="imgUrl"
                            onChange={this.handleChange}
                            value={imgUrl}>
                        </input>
                                <button>Submit Ugly Thing</button>
                    </form>
                            )}
                        </ContextConsumer>       
                </div>
            )
        }
    }




export default Form