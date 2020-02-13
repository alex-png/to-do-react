import React from "react"
import SignUp from './SignUp.js'

export default class LogIn extends React.Component {
    state={
        signUp: false,
        name: null,
        password: null
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        let formData = {
            name: this.state.name, 
            password_digest: this.state.password
        }
        let configObj = {
            method: "POST",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           },
           body: JSON.stringify({ user: formData })
       };
       fetch('http://localhost:3000/', configObj)
       .then(res => res.json())
       .then(data => this.props.logInOrSignUp(data))

    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    
    handleClick=(e)=>{
        e.preventDefault()
        this.setState((prevState) => {
            return {signUp: !prevState.signUp};
          });
          
    }

    render(){
        return(
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"}}>
        { this.state.signUp?
            <SignUp logInOrSignUp = {this.props.logInOrSignUp} />
            : 
            <>
            <form onSubmit={this.handleSubmit} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop:" 20vh" }}> 
            <h1>{ this.state.signUp? "Sign Up" : "Log In"  }</h1>
                <input name="name"onChange={this.handleChange} placeholder="Username...">
                </input>
                <input type="password" name="password" onChange={this.handleChange} placeholder="Password..."></input>
                <button>Log In</button>
            </form>
            </>
        }
        {this.state.signUp? null :<> <h1>or</h1><button name="sign up" onClick={this.handleClick}>Sign Up</button> </>}
            
        </div>
        )

    }
}