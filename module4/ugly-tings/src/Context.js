import React, { Component } from "react"
import axios from "axios"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    state = {
        uglyThingsArr: [],
    }

    handleChange = (e) => {
        this.setState({
            uglyThingsArr: e.target.uglyThingsArr
        })
    }

    // get request
    // component did mount here

    componentDidMount = () => {
        axios.get("https://api.vschool.io/ashleystanley/thing")
            // .then(res => res.json())
            .then(res => {
                let thing = res.data
                this.setState({
                    uglyThingsArr: thing
                })
                console.log(this.state)
            })
    }
    
    render(){
        
        console.log(this.props.children)

        return(
            <Provider value={{uglyThings: this.uglyThingsArr, onChange: this.handleChange, onSubmit: this.handleSubmit, }}>
                {this.props.children}
            </Provider>
        )
    }

}

export {ContextProvider, Consumer as ContextConsumer}