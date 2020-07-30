import React from 'react'
import "./TodoBox.css"

const todoBox = (props) => {
    return (
        <div className="TodoBox">
             <h4>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Prof: {props.prof}</h4>
            <button onClick={props.removeClicked} style={{margin:"1rem"}}>Click to Remove</button>
        </div>
    )
}

export default todoBox