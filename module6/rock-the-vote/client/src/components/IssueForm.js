import React, {useState} from "react"


const initInputs = {
    title: "",
    description: ""
}


export default function IssueForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addIssue} = props


    function handleChange(){
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
    }
}

