import React, { Component } from "react"
import {ContextConsumer} from "./Context"
import UglyThing from "./UglyThing"

class UglyThingsList extends Component{
//uglythings onchange onsubmit
    render(){
        return(
            <>
                <ContextConsumer>
                        {context => (
                            <div>
                                {context.uglyThings.map(thing => {
                                    return <UglyThing title={thing.title} description={thing.description} imgUrl={thing.imgUrl}/> 
                                })}
                        </div>
                        )}
                </ContextConsumer>

            </>
        )
        
    }
}

export default UglyThingsList

// only states: context to control array and form to control inputs
// consumers: form, uglytings -- map through and render

// uglyTings component -- doesn't need state but needs component did mount