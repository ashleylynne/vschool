import React, {useContext} from "react"
import Bounty from "./Bounty"
// import DisplayBounty from "./DisplayBounty"
import BountyForm from "./BountyForm"
import {Context} from "./contextProvider"
import "./App.css"


function App() {

  const {bountiesData, handlePost} = useContext(Context)
  const mappedThroughBounty = bountiesData.map(bounty => <Bounty bounty= {bounty} />)

  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="header-text">
          Bounty Hunter
        </h1>
      </div>
        <BountyForm submit={handlePost}/>
        {/* <Bounty /> */}
        {mappedThroughBounty}
    </div>
  )
}

export default App

