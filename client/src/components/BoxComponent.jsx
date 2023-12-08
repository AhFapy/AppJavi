import React from 'react'
import LandingPageBtn from './LandingPageBtn'

function BoxComponent(props) {
  return (
    <div className='box-wrapper'>
    <div className={props.selected}>
        <span className={props.selected === "selected-box" ? "selected-box-title" : "box-title"}>{props.title}</span>
        <div className='box-description-div'>
          <span className={props.selected === "selected-box" ? "selected-text" : "box-description-span"}>Subtítulo Descriptivo</span><br/><br/><br/><br/>
          <span className={props.selected === "selected-box" ? "selected-text" : "box-description-span"}>Subtítulo Descriptivo</span><br/><br/><br/><br/>
          <span className={props.selected === "selected-box" ? "selected-text" : "box-description-span"}>Subtítulo Descriptivo</span><br/><br/><br/><br/>
        </div>
        {props.selected === "selected-box" ? <LandingPageBtn route={props.route}/> : ""}
    </div>
    </div>
  )
}

export default BoxComponent
