import React from "react"
import friends from "./FriendList"
import DisplayFriendMapThroughPets from "./DisplayFriendMapThroughPets"


function MappingThroughFriends() {
    const FriendList = friends.map(friend  =>  <DisplayFriendMapThroughPets key name={friend.name} age={friend.age} pets={friend.pets} />)
    return(
        <div>
            {FriendList}
        </div>
    )
}

export default MappingThroughFriends