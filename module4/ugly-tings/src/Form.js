import React, { Component } from "react"
import {ContextConsumer} from "./Context"

// right now: figure out how we can push this user data to the ugly things array

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

        handleSubmit = postUglyThing => {
            console.log("hi")
            const newThing = {
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                title: this.state.title
            }
            this.setState(prev => ({
                ...prev,
                uglyThingsArr: [...prev.uglyThingsArr, newThing]
            }))
            postUglyThing(newThing)
 
        }

        render(){
            const {title, description, imgUrl} = this.state
            
            return(
                <div className="form-container">
                    <form className="form" onSubmit={this.handleSubmit}>
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
                        <ContextConsumer>
                          {context => (
                                <button onClick={(e)=> {
                                    e.preventDefault()
                                    // console.log(context)
                                    {handleSubmit(context.postUglything)}
                                }}>
                                    {/* <button onClick = {()=>handleSubmit(context.postUglything)} */}
                                    Submit Ugly Thing</button>
                            )}
                        </ContextConsumer>       
                    </form>
                </div>
            )
        }
    }




export default Form