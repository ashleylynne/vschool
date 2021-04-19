import React, { Component } from "react"
import Header from "./Header"
import UglyTing from "./UglyTing"
// import {ContextConsumer} from "./Context"


class App extends Component{
    render(){
        return(
            <>
                <Header />
                <UglyTing />
            </>
        )
    }
}

export default App