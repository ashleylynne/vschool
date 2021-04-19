import React from "react"

const Form = (props) => {
    const {title, description, img} = props

    return(
        <>
            <form className="form">
                <input 
                    type="text" 
                    placeholder="title"
                    name="title"
                    value={title}>
                </input>
                <input 
                    type="text" 
                    placeholder="description"
                    name="description"
                    value={description}>
                </input>
                <input 
                    type="text" 
                    placeholder="description"
                    name="description"
                    value={img}>
                </input>
            </form>
        </>
    )
}

export default Form