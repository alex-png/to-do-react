import React from 'react'
import List from './List'

export default class Container extends React.Component {

    state = {
        notes: []
    }

    deleteElement = (id) => {
        let newNotes = this.state.notes
        newNotes.splice(id, 1)
        console.log(newNotes)
        this.setState({notes: [...newNotes]})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("ON SUBMIT WORKS!!")
        console.dir(e.target)
        let val = e.target.firstChild.value
        // debugger
        this.setState(prevState => ({
            notes: [...prevState.notes, val]
        }))
    }

    render = () => {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin:"2em", flexDirection: "column"}} >
            <h1>To Do</h1>
            <form onSubmit={this.handleSubmit}>
            <textarea> </textarea>
            <br/>
            <input type="submit" />

            </form>
            <List notes={this.state.notes} deleteElement={this.deleteElement}/>
            </div>
        )
    }
}
