  
import React from 'react'

class SignUp extends React.Component {

    state = ({
        name: '',
        password: ''
    })

    //controlled form for input
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const username = this.state.username.replace(/\s/g, '')
        const password = this.state.password.replace(/\s/g, '')
        console.log("POSTING TO DATABASE!")
        let formData = {
            name: username,
            password_digest: password
        };
        let configObj = {
             method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user: formData })
        };

        fetch("http://localhost:3000/u/", configObj)
            .then(res => res.json())
            .then(data=>{
                if(data.name.length <= 1){
                    console.log("no can do bucko")
                }else{
                    this.props.logInOrSignUp(data)
                }
            })

    }//end of funct


    

    render = ()=>{
                return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <h1>sign up </h1>
            <form onSubmit={this.handleSubmit} >
                <input placeholder= "Username..." onChange={this.handleChange} name= "username"/>
                <br />
                <input type= "password" placeholder="Password..." onChange={this.handleChange} name="password" />
                <br />
                <button>Submit</button>
        {this.state.error? (<p style={{ color:'red' }}> This username {this.state.error} Please try another. </p> ): null}
            </form>
            </div>
        )
    }
}





export default SignUp 