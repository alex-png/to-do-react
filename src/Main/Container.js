import React from 'react'
import List from './List'

export default class Container extends React.Component {

    state = {
        notes: [],
        textValue: ""
    }



    deleteElement = (id) => {
        let newNotes = this.state.notes
        newNotes.splice(id, 1)
        this.setState({notes: [...newNotes]})
    }
    
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let val = e.target.firstChild.value
        // debugger
        this.setState(prevState => ({
            notes: [...prevState.notes, val],
            textValue: ""
        }))
    }

    render = () => {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin:"2em", flexDirection: "column"}} >
            <h1>To Do</h1>
            <form onSubmit={this.handleSubmit}>
            <textarea name= "textValue" value={this.state.textValue} onChange={this.handleChange}> </textarea>
            <br/>
            <input type="submit" />

            </form>
            <List notes={this.state.notes} deleteElement={this.deleteElement}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(`http://localhost:3000/${this.props.user.name}/notes`)
        .then(res => res.json())
        .then(console.log)
    }

}
