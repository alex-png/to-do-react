import React from 'react'

export default class List extends React.Component {


    handleClick = (e) => {
        e.preventDefault()
        console.log("DELETE!!!!")
        console.log(e.target)
        debugger
        this.props.deleteElement(e.target.previousElementSibling.id)
    }


    render = () => {
        return(
            <>
            <h1>List:</h1>
            {this.props.notes.map((li, index) =>
            <> 
            <h1 id={index}> {li} </h1> 
            <button onClick={this.handleClick} > DELETE </button>  
            </>
            )}
            </>
            )


    }
}
