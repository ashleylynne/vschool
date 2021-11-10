import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        todos: []
    }

    const [userState, setUserState] = useState(initState)

    
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                token,
                user
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
            // change the state and save the token
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}