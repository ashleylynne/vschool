import React, {useContext, useState} from "react"
import { UserContext } from "../context/UserProvider.js"
import AuthForm from "./AuthForm.js"


const initInputs = {
    username: "",
    password: ""
}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    const { signup, login } = useContext(UserContext)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
        console.log("signup!")   
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
        console.log("login!")
    }

    return(
        <div className="auth-container">
            {!toggle ?
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnTxt = "sign up"
                    />
                    <button onClick={() => setToggle(prev => !prev)}>Already a member?</button>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnTxt = "login"
                    />
                    <button onClick={() => setToggle(prev => !prev)}>Not a member?</button>
                </>
            }
        </div>
    )

}