import React, { Component } from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }

    toggleTheme = e => {
        // console.log(this.state.theme)
        this.setState(prevState =>{
            return{
                theme: prevState.theme === "dark" ? "light" : "dark"
            }
        })
    }

    render(){
        return(
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }


}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}