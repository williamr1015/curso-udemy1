import React, { useRef } from 'react'
import './FocusScreen.css'

export const FocusScreen = () => {
    const inputRef = useRef()
    
    const handleClick = () => {
        inputRef.current.select();                                      //<<<document.querySelector('input').select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
            ref={ inputRef }
            className="form-control"
            placeholder="Su Nombre"
            />

            <button 
            className="btn btn-outline-primary mt-5"
            onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}
