import React from "react"
import Home from "./Home"
import {Link, Switch, Route} from "react-router-dom"

function Navbar(){
    return(
        <div>
            <Link to ="/">Home </Link>
            <Link to = "/about"> About</Link>
            <Link to="/services"> Services</Link>

            <Switch>
                <Route exact path ="/">
                    {/* <h1>Home!</h1> */}
                    <Home />
                </Route>
                <Route exact path ="/about">
                    <h1>About!</h1>
                </Route>
                <Route exact path="/services">
                    <h1>Services!</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Navbar