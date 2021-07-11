import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"



const Context = React.createContext()

function ContextProvider (props) {

    // let bounties = []
    const [bountiesData, setBountiesData] = useState()
    // const [newBounty, setNewBounty] = useState({firstName: "", lastName: "", isAlive: "", bountyAmount: 0, type: "", _id: 0})

useEffect(() => {
    axios.get("/api/")
        .then(res => {
            setBountiesData(res.data)
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