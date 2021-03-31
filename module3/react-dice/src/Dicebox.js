import React, { Component } from "react"

class Dicebox extends Component {
    render() {
        return(
            <div>
                <h1 className="count">{this.props.counter}</h1>
            </div>
        )
    }
}

export default Dicebox