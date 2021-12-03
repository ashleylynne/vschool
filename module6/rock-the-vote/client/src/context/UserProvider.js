import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

// create user axios
const userAxios = axios.create()
    // add intercepters to config
    userAxios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        // authorize
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: []
    }

    const [userState, setUserState] = useState(initState)

    // login
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
    // signup
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

    // logout
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
        console.log("logout!")
    }

    // add issue
    function addIssue(newIssue){
        userAxios.post("/api/issues", newIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: [...prevUserState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // delete user issue
    function deleteIssue(id){
        userAxios.delete(`/api/issues/${id}`)
            console.log("delete!", id)
            .then(res => {
                setUserState((prevUserState) => (
                    prevUserState.filter((issue) => issue._id !== id)
                ))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // add comment
    function addComment(newComment){
        userAxios.post("/api/issues/comments", newComment)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))

    }
    
    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout, 
                addIssue,
                addComment,
                deleteIssue
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}