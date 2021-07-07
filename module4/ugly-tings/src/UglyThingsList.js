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
                                    return <UglyThing title={thing.title} description={thing.description} imgUrl={thing.imgUrl} _id={thing._id}/> 
                                })}
                        </div>
                        )}
                </ContextConsumer>

            </>
        )
        
    }
}

export default UglyThingsList