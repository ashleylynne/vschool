import React, { Component } from "react"
import {ContextConsumer} from "./Context"
import axios from "axios"

class UglyThingsList extends Component{
    
    componentDidMount = () => {
        axios.post("https://api.vschool.io/ashleystanley/thing", this.state.uglyThingsArr.thing)
        .then(res => {
            this.setState({
                uglyThingsArr: res.data
            })
        })
    }

    render(){
        return(
            <div>
                <ContextConsumer>
                        {context => (
                    <div>
                            {context.uglyThingsArr.map((thingObj, index) => {
                                { <UglyThingsList key={(index, thingObj.thing)} />}
                            })}
                    </div>
                        )}
                </ContextConsumer>

            </div>
        )
        
    }
}

export default UglyThingsList

// only states: context to control array and form to control inputs
// consumers: form, uglytings -- map through and render

// uglyTings component -- doesn't need state but needs component did mount