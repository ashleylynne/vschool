import React from "react"
export default function AuthForm(props){

    const { 
        handleChange,
        handleSubmit,
        inputs: {
            username,
            password,
        },
        btnTxt
    } = props
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="username"
                    onChange={handleChange}
                >
                </input>
                <input
                    type="text"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={handleChange}
                >
                </input>
                <button>{btnTxt}</button>
            </form>
        </>
    )
}