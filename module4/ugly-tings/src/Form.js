import React, { Component } from "react"
import {ContextConsumer} from "./Context"

// right now: figure out how we can push this user data to the ugly things array

class Form extends Component {

        state = {
            img: "",
            description: "",
            title: "",
            uglyThingsArr: []
        }

        handleChange = e => {
            const {name, value} = e.target
            this.setState({
                [name]: value
            })
            console.log(this.state)
        }

        handleSubmit = e => {
            e.preventDefault()
            console.log("hi")
            const newThing = {
                img: this.state.img.src,
                description: this.state.description,
                title: this.state.title
            }
            this.setState(prev => ({
                ...prev,
                uglyThingsArr: [...prev.uglyThingsArr, newThing]
            }))

            
        }

        render(){
            const {title, description, img} = this.props
            
    
            return(
                <div className="form-container">
                    <form className="form">
                        <input 
                            type="text" 
                            placeholder="title"
                            name="title"
                            value={title}>
                        </input>
                        <input 
                            type="text" 
                            placeholder="description"
                            name="description"
                            value={description}>
                        </input>
                        <input 
                            type="text" 
                            placeholder="img url"
                            name="img"
                            value={img}>
                        </input>
                        <ContextConsumer>
                          {context => (
                                <button onClick={context.handleSubmit}>Submit Ugly Thing</button>
                            )}
                        </ContextConsumer>       
                    </form>
                </div>
            )
        }
    }




export default Form