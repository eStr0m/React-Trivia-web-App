import React from "react"

export default function Modal(props) {
    

    return (
        <div className="modal-cont" style={{display: props.display}}>
            <h1 className="modal-header">Quizzical</h1>
            <p className="modal-desc">Some description if needed</p>
            <button className="modal-btn">Start quiz</button>
        </div>
)
}