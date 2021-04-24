import React from "react"
import Header from "./Header"
import Form from "./Form"
import UglyThingsList from "./UglyThingsList"

const App = () => {
    return(
        <>
            <Header />
            <Form /> 
            <UglyThingsList />     
        </>
    )
}

export default App

// form and list component as siblings
// pretending that maybe the form is in a component unrelated to the list and we don't want to lift state to the parent
// not displacing state... instead now we have a global state that lives in context
// axios call lives in context but gets called from a component did mount in consumer

// only states: context to control array and form to control inputs
// consumers: form, uglythings -- map through and render

// uglyThings component -- doesn't need state but needs component did mount

// setup:
    // provider
    // value = object with {handleChange, delete, Onsubmit}

    // Requirements
    // Must have 3 input fields:
        // Img url field (A url to an image of an ugly thing)
        // Title field (The title of the image that the user wants to give)
        // Description field (why the user thinks it is ugly)
    // Must have Submit button that submits the data
    // Must display a list of posted images with their associated titles and descriptions
    // Must store the array of ugly thing objects in the Context store
    // Must be able to delete an ugly thing
    // Must be able to edit an ugly thing
    // Must make all requests via the Ugly Things API