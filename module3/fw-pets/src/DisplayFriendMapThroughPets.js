import React from "react"
import PetsList from "./PetsList"


function DisplayFriendMapThroughPets(props) {
    console.log(props,'pets')
    const petsList = props.pets.map(animal => <PetsList key name={animal.name} breed={animal.breed}/>)
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            {petsList}
        </div>
    )
}

export default DisplayFriendMapThroughPets
