import React from 'react'
import LandingPageBtn from './LandingPageBtn'

function BoxComponent(props) {
  return (
    <div className='box-wrapper'>
    <div className={props.selected}>
        <span className={props.selected === "selected-box" ? "selected-box-title" : "box-title"}>{props.title}</span>
        <div className='box-description-div'>
          <span className={props.selected === "selected-box" ? "selected-text" : "box-description-span"}>{props.texto}</span><br/><br/><br/><br/>
        </div>
        {props.selected === "selected-box" ? <LandingPageBtn route={props.route} text="Saber Más"/> : ""}
    </div>
    </div>
  )
}

export default BoxComponent
