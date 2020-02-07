import React from "react"

export default class LogIn extends React.Component {


    render(){
        return(
        <>
            
            <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop:" 20vh" }}> 
                <h1>Log In</h1>
                <input placeholder="Username...">
                </input>
                <input placeholder="Password..."></input>
                <button>Log in</button>
            </form>
        </>
        )

    }
}