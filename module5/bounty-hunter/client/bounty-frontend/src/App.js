import React, {useContext} from "react"
import Bounty from "./Bounty"
// import DisplayBounty from "./DisplayBounty"
import BountyForm from "./BountyForm"
import {Context} from "./contextProvider"
import "./App.css"


function App() {

  const {bountiesData, handlePost, handleFilter} = useContext(Context)
  const mappedThroughBounty = bountiesData.map(bounty => <Bounty bounty= {bounty} />)

  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="header-text">
          Bounty Hunter
        </h1>
      </div>
        <BountyForm submit={handlePost}/>
        <div className="filter-form-container">
          <h4 className="filter-header">Filter by Type</h4>
          <select className="filter-form" onChange={handleFilter}>Select Type
            <option value="reset">all bounties</option>
            <option value="jedi">jedi</option>
            <option value="sith">sith</option>
          </select>
        </div>
        {/* <Bounty /> */}
        {mappedThroughBounty}
    </div>
  )
}

export default App

