import React from 'react'
import "./component-styles.css"

function DefaultButton(props) {

    function handleClick() {
        window.location.href = `/${props.route}`;
    }
    
  return (
    <div className='default-btn' onClick={() => handleClick()}>
      <span className='layer-span'>
        <span className='gradient-cover'>
            {props.msg}
        </span>
      </span>
    </div>
  )
}

export default DefaultButton