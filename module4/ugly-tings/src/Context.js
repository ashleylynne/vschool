import React, { Component } from "react"
// import axios from "axios"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    state = {
        title: "",
        description: "",
        uglyTingsArr: [],
        img: ""
    }

    // componentDidMount = () => {
    //     axios.get("https://api.vschool.io/ashleystanley/thing")
    // }

    render(){
        return(
            <Provider>
                {/* add value and state once i figure out how to structre this mfer */}
                {this.props.children}
            </Provider>
        )
    }

}

export {ContextProvider, Consumer as ContextConsumer}