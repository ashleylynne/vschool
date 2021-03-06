import React, { Component } from "react"
import axios from "axios"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    state = {
        uglyThingsArr: [],
    }
    handleChange = (e) => {
        console.log("change")
        this.setState({
            uglyThingsArr: [e.target.uglyThingsArr]
        })
    }
    
    // get request
    // component did mount here

    componentDidMount = () => {
        axios.get("https://api.vschool.io/ashleystanley/thing")
        // .then(res => res.json())
        .then(res => {
            let thing = res.data
            console.log(thing,123450987)
            this.setState({
                uglyThingsArr: thing
            })
            console.log(this.state)
        })
        
    }
    
    postUglyThing = (thing) => {
        console.log("post")
        axios.post("https://api.vschool.io/ashleystanley/thing", thing)
        .then(res => {
            console.log(res.data)
            this.setState(prev => ({
                uglyThingsArr: [...prev.uglyThingsArr, thing]
            }))
        })
        
    }

    deleteUglyThing = (id) => {
        console.log("delete")
        axios.delete("https://api.vschool.io/ashleystanley/thing/"+id)
            .then(res => {
                console.log(res.data)
                this.setState(prev => {
                const updatedArray = prev.uglyThingsArr.filter(thing => thing._id !==id)
                return{
                    uglyThingsArr: updatedArray
                }
            })
        })
            .catch(err => console.log(err))
    }
// const updatedArray = prev.uglyThingsArr.map(thing => thing._id === id ? return input : return thing )

    putThing = (thing) => {
        console.log("Edit!")
        axios.put(`https://api.vschool.io/ashleystanley/thing/${thing._id}`, thing)
            .then(res => {
                console.log(res)
                this.setState(prev => {
                    const newArray = prev.uglyThingsArr.map(item => item._id === thing._id? thing : item)
                    return {
                        uglyThingsArr: newArray
                    }
                })
            })
    }

   
    render(){
        // console.log(this.state.uglyThingsArr,12345)
        // console.log(this.props.children)

        return(
            <Provider value={{
                uglyThings: this.state.uglyThingsArr, 
                onChange: this.handleChange, 
                postUglyThing: this.postUglyThing,
                delete: this.deleteUglyThing,
                edit: this.putThing
                 
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export {ContextProvider, Consumer as ContextConsumer}