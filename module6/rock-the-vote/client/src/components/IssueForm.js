import React, {useState} from "react"


const initInputs = {
    title: "",
    description: ""
}


export default function IssueForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const { addIssue } = props


    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs=> ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
        return inputs
    }
    const {title, description} = inputs
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="title" 
                    value={title}
                    name="title"
                    onChange={handleChange}
                    >
                </input>
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    name="description"
                    onChange={handleChange}
                >
                </input>
                <button type="submit">post!</button>
            </form>
        </div>
    )
}

