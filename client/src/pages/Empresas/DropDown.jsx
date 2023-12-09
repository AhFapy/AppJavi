import React, { useState } from 'react'

function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = function() {
        setIsOpen(!isOpen)
        console.log("DD status is: ", isOpen)
    }

    return (
        <div className='dd-wrap'>
            <div className={isOpen === true ? "dropdown-container no-border" : "dropdown-container"} onClick={toggleDropDown}>
                <div className='dd-left'>
                    <h2 className='dd-title'>{props.pregunta}</h2>
                </div>
                <div className='dd-right'>
                    <svg className={isOpen === true ? 'dd-svg rotate' : 'dd-svg'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
            </div>
            <div className={isOpen === true ? "dd-content visible" : "dd-content hidden"}>
                <p className='dd-content-text'>{props.respuesta}</p>
                <ul className='argumentos-list'>
                {props.argumentos.map((text, i) => (
                    <li className='argumento' key={i}>{text}</li>
                ))}
                </ul>
            </div>
        </div>

    )    
}


export default DropDown