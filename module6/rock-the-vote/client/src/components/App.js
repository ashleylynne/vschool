import React, { useContext } from "react"
import {Switch, Route} from "react-router-dom"
import Auth from "../components/Auth.js"
import Navbar from "../components/Navbar.js"
import Profile from "./Profile.js"
import { UserContext } from "../context/UserProvider.js"


export default function App(){
    const {token, logout} = useContext(UserContext)
    return(
        <div className="app">
            <Navbar logout={logout} />
            <Auth />
        </div>
    )
}