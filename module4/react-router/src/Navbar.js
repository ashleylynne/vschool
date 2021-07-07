import React from "react"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import {Link, Switch, Route} from "react-router-dom"

function Navbar(){
    return(
        <>
            <div className="navbar-container">
                <Link to ="/">Home </Link>
                <Link to = "/about"> About</Link>
                <Link to="/services"> Services</Link>

                <Switch>
                    <Route exact path ="/">
                        {/* <h1>Home!</h1> */}
                        <Home />
                    </Route>
                    <Route exact path ="/about">
                        <About />
                    </Route>
                    <Route exact path="/services">
                        {/* <h1>Services!</h1> */}
                        <Services />  
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Navbar