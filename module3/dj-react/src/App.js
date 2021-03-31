import React, {Component} from "react"
import Square from "./Square"
import './App.css'

class App extends Component {

    state = {
        squares: ["white", "black", "black", "white"]
    }

    djSmall = () => {
        this.setState(prevState => ({squares: prevState.squares.map((square) => square === "white" ? "black" : "white" ) }))
    }
    partyDj = () =>{
        this.setState(prevState =>  {
            if(prevState.squares[0] !== 'purple') {
                return {
                    squares: ['purple','purple','white','white']
                }
            }
        } )
    }

    // partyDj = () => {
    //     this.setState(prevState => ({squares: prevState.squares.map((square) => square === square ? [0,1] : "purple")}))
    // }

    
    render(){
        return(
            <>
                <div className = "div-container">
                    <Square color={this.state.squares[0]}/>
                    <Square color={this.state.squares[1]}/>
                    <Square color={this.state.squares[2]}/>
                    <Square color={this.state.squares[3]}/>
                </div>
                <div>
                    <button className= "dj-small" onClick={this.djSmall}> dj small</button>
                    <button className="party-dj" onClick={this.partyDj}>party dj</button>
                </div>

            </>
        )
    }

}

export default App 