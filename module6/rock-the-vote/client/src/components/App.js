import React, { useContext } from "react"
import Auth from "../components/Auth.js"
import Navbar from "../components/Navbar.js"
import { UserContext } from "../context/UserProvider.js"


export default function App(){
    const {logout} = useContext(UserContext)

    return(
        <div>
            <Navbar logout={logout} />
            <Auth />
        </div>
    )
}