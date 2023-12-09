import React from 'react'
import './landing-page-btn-styles.css';

function LandingPageBtn(props) {
  return (
    <a class="bn39" href={props.route}><span class="bn39span">{props.text}</span></a>
  )
}

export default LandingPageBtn
