import React, {useContext} from "react"
import Bounty from "./Bounty"
import DisplayBounty from "./DisplayBounty"
import BountyForm from "./BountyForm"
import {Context} from "./contextProvider"


function App() {

  const {bountiesData, handlePost} = useContext(Context)
  const mappedThroughBounty = bountiesData.map(bounty => <DisplayBounty bounty= {bounty} />)

  return (
    <div className="App">
        <h1>Bounty Hunter</h1>
        <BountyForm submit={handlePost}/>
        <Bounty />
        {mappedThroughBounty}
    </div>
  )
}

export default App

