import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"



const Context = React.createContext()

function ContextProvider (props) {

    const [bountiesData, setBountiesData] = useState()
    const [bounty, setBounty] = useState({firstName: "", lastName: "", isAlive: "", bountyAmount: 0, type: "", _id: 0})
    const [userBounty, setUserBounty] = useState({firstName: "", lastName: "", isAlive: "", bountyAmount: 0, type: "", _id: 0})
    const [name, setName] = useState("")
    const [bountiesArray, setBountiesArray] = useState()

    useEffect(() => {
        axios.get("/bounties")
            .then(res => {
                setBountiesData(res.data)
            })
            return () => {
                console.log("got bounties")
            }
        }, [])
        
    useEffect(() => {
        console.log(bountiesData)

    }, [bountiesData])
   
    const handleSubmit = e => {
        e.preventDefault()
        console.log("got bounty!")
        let randomBounty = bountiesData[Math.floor(Math.random() * bountiesData.length)]
        setBounty(randomBounty)
        console.log(bounty)
    }
    
    const handleChange = e => {
        setName(e.target.value) 
        console.log(name)
        
    }
    
    const handlePost = e => {
        e.preventDefault()
        console.log("new post!", 12345678)
        axios.post("/bounties")
            .then(res =>{
                setUserBounty(res.data)
            })
            console.log(userBounty)

    }

    const handleDelete = _id => {
        console.log("delete!", _id)
        setBountiesArray(bountiesArray.filter((bounty) => bounty._id !== _id))
    }
    
    return(
        <Context.Provider value={{bountiesData, handleSubmit, bounty, handleChange, handlePost, handleDelete}}>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}