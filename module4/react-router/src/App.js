import React from "react"
import "./App.css"
import Navbar from "./Navbar"
import Footer from "./Footer"


function App() {
    return(
        <>
            <div className="app-container">
                {/* App data: Navbar, Body, Footer */}
                <Navbar />
                <Footer />
            </div>
        </>

    )
}

export default App