import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"


const Context = React.createContext()

function ContextProvider (props) {

    const [bountiesData, setBountiesData] = useState([])
    const [bounty, setBounty] = useState({firstName: "", lastName: "", isAlive: true, bountyAmount: 0, type: "", _id: 0})
    const [userBounty, setUserBounty] = useState({firstName: "", lastName: "", isAlive: true, bountyAmount: 0, type: "sith"})

   
    useEffect(() => {
        getBountyData()
            return () => {
                console.log("got bounties")
            }
        }, [])
        
    useEffect(() => {
        console.log(bountiesData)

    }, [bountiesData])

    const getBountyData = () => {
        axios.get("/bounties")
        .then(res => {
            setBountiesData(res.data)
        })
        .catch(err => console.log(err.res.data.errMsg))
    }
   
    // get one random bonuty
    const handleSubmit = e => {
        e.preventDefault()
        console.log("got bounty!")
        let randomBounty = bountiesData[Math.floor(Math.random() * bountiesData.length)]
        setBounty(randomBounty)
        console.log(bounty)
    }

    const handleChange = e => {
        const {name, value} = e.target
        setUserBounty(prevState => ({
            ...prevState, 
            [name]: value
        }))
        console.log(userBounty)   
    }
    
    // post one userbounty to the database
    const handlePost = e => {
        e.preventDefault()
        console.log("new post!", 12345678)
        axios.post("/bounties", userBounty)
            .then(res =>{
                getBountyData()
            })
            console.log(userBounty)
            // handleReset()
    }
    // delete one bounty
    const handleDelete = id => {
        console.log("delete!", id)
        axios.delete(`/bounties/${id}`)
            .then(res => {
                setBountiesData((prevState) => (
                    prevState.filter((bounty) => bounty._id !== id)
                ))
                getBountyData()
            })
            .catch(err=>{
                console.log(err)
            })
        console.log(bountiesData)
    }
    
    // update one bounty
    const handleUpdate = id => {
        console.log("update!")
        axios.put(`/bounties/${id}`, userBounty)
            .then(res => {console.log(res) 
            getBountyData()
        })
            .catch(err => console.log(err))
        // handleReset()

    }
    // filter by type
    const handleFilter = e => {
        if(e.target.value === "reset"){
            getBountyData()
        }
        axios.get(`/bounties/search/type?type=${e.target.value}`)
            .then(res => setBountiesData(res.data))
            .catch(err => console.log(err))
    }

    // reset form values
    const handleReset = () => {
        setBountiesData((prevBountiesData) => ({
            ...prevBountiesData,
            bountiesData: ""
        }))
    }

    return(
        <Context.Provider value={{handleReset, setUserBounty, handleFilter, bountiesData, userBounty, handleSubmit, bounty, setBounty, handleChange, handlePost, handleDelete, handleUpdate}}>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}
