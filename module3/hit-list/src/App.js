// You will need to make a GET request to retrieve the data for this hit list, and you can do this with axios.get() or fetch().

// The data is located at this URL: https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json

// Make sure to do a good job on this one so that you don't end up on that list :)

// Hints:

// You'll be storing an array of the targets in state
// Your array will start empty, but then be set in a componentDidMount
// You'll need to map through that array to get React to render it in JSX

import React, { Component } from 'react'
import Target from "./Target"
import axios from "axios"


class App extends Component {
    state = {
        targets: []
    }

    componentDidMount = () => {
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => {
            this.setState({
                targets: response.data
            })
        })
    }

    render(){
        const loadingTargets = this.state.targets.map((target) => { return <Target name ={target.name} image = {target.image}/>})
        return(
            <>
                {loadingTargets}
            </>
        )
    }
}

export default App