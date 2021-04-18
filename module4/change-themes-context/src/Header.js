import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h1>{context.theme === "dark" ? "Dark" : "Light"} Theme</h1>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header