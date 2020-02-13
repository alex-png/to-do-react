import React from 'react'

export default class List extends React.Component {


    handleClick = (e) => {
        e.preventDefault()
        this.props.deleteElement(e.target.previousElementSibling.id)
    }


    render = () => {
        return(
            <>
            <h1>List:</h1>
            {this.props.notes.map((li, index) => 
            <div id={index + 1}> 
            <h1> {li} </h1> 
            <button onClick={this.handleClick} > DELETE </button>  
            </div>
            )}
            </>
            )


    }
}
