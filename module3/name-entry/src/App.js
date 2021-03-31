
// Build a simple react app with an input box, an <h1>, a button, and an ordered list. 
// The user will type names into the input box.

// When the user types in the input box, the <h1> should update to show the same text as the input box.

// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. 
// (Hint: you'll need to set state and map over an array to do this).

import React, { Component } from "react"

class App extends Component{
    state = {
        name: "",
        nameArray: []
    }

    handleChange = (e) => {
       const {name, value} = e.target
       this.setState({
           [name]: value
       })
       console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()     
        this.setState(prevState => {
            return{
                nameArray: [...prevState.nameArray, 
                    {name: prevState.name}
                ]
            }
        })  
        console.log("Was submitted!", this.state)
    
    }

    
    render(){
        const updatedArray = this.state.nameArray.map((nameObj, index) => <li key={index}>{nameObj.name}</li>)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name}onChange={this.handleChange}/> What is your name?
                    <button type="submit" value="Submit">Submit</button>
                </form>

                <h1>
                    Your name is {this.state.name}
                </h1>
                <ul>
                    {updatedArray}
                </ul>
            </div>
            
        )
    }
}

export default App