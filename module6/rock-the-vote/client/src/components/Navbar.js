import React from "react"


export default function Navbar(props) {
    const {logout} = props

    return(
        <div className="navbar">
            {/* Profile link here */}
            {/* Public link here */}
            <button onClick={logout}>logout</button>
        </div>
    )
}