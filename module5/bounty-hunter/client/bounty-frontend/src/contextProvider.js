import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"



const Context = React.createContext()

function ContextProvider (props) {

    // let bounties = []
    const [bountiesData, setBountiesData] = useState()
    // const [newBounty, setNewBounty] = useState({firstName: "", lastName: "", isAlive: "", bountyAmount: 0, type: "", _id: 0})

useEffect(() => {
    axios.get("http://localhost:9000/bounties")
        .then(res => {
            setBountiesData(res.json())
            console.log(bountiesData)
        })
})

    return(
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )

}


export {ContextProvider, Context}