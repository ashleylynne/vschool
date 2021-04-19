import React from "react"
import {ContextConsumer} from "./Context"
import Form from "./Form"

const Header = () => {
    return(
        <header>
            <Form />
            <ContextConsumer>
                {/* context here tho I still don't get how to do this lol */}
            </ContextConsumer>
        </header>
    )
}

export default Header