import React, { useContext } from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import Auth from "../components/Auth.js"
import Navbar from "../components/Navbar.js"
import Profile from "./Profile.js"
import Public from "./Public.js"
import { UserContext } from "../context/UserProvider.js"


export default function App(){
    const {token, logout} = useContext(UserContext)
    return(
        <div className="app">
            <Navbar logout={logout} />
            <Switch>
                <Route 
                    exact path ="/" 
                    render={() => token? <Redirect to={"/profile"} /> : <Auth />}
                />
                <Route 
                    path="/profile"
                    render={() => <Profile />}
                />
                <Public
                    path="/public" 
                    render={() => <Public />}
                />
            </Switch>
        </div>
    )
}