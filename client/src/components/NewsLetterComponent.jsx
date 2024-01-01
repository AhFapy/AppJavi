import React from 'react'

function NewsLetterComponent(props) {
  return (
    <div className='box-wrapper'>
    <div className={props.selected}>
        <span className={props.selected === "selected-box" ? "selected-box-title" : "box-title"}>Newsletter</span>
        {props.selected === "selected-box" ? <span className={props.selected === "selected-box" ? "selected-text" : "box-description-span"}>No Disponible</span> : ""}
    </div>
    </div>
  )
}

export default NewsLetterComponent