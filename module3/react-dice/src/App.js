import { Component } from 'react';
import './App.css';
import './Dicebox'
import Dicebox from './Dicebox';

class App extends Component{
  // App data here
  state = {
    counter: 0
  }  

  count = () => {
    this.setState({counter: Math.floor(Math.random()*6)})
    console.log(this.state.counter)
    // keeps returning as either NaN or undefined as it is not running the Math methods
    
    
    // this.setState(prevState => ({numbers: prevState.numbers.map((Math.floor(Math.random*6)))}))
    // console.log()

  }

  render(){
    return(
      <>
        <div className = "counter-container">
          <h1>Click to Get Random Number!</h1>
          <Dicebox counter = {this.state.counter} />

          <button onClick={this.count}>Counter</button>
        </div>
      </>

    )
  }
}

export default App;
