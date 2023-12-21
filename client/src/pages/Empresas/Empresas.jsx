import React from 'react'
import LandingPageNav from '../landing-page/LandingPageNav'
import "./empresas.css"
import { Tilt } from 'react-tilt'
import DropDown from './DropDown'
import Comencemos from '../../components/Comencemos'

function ServiceCard(props) {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

    return (
    <Tilt options={defaultOptions} className="tilt-box">
        <div className='top-tilt-box'>imagen</div>
        <div className='bottom-tilt-box'>{props.text}</div>
    </Tilt>
    )
}

function Empresas() {
    const services = ["servicio 1", "servicio 2", "servicio 3"];

  return (
    <>
    <LandingPageNav/>

    <div className='header-empresas'>
        <h2 className='header-h2'>Automatiza Procesos y Monetiza tu Hobby</h2>
        <div className='black'>
            <span className='white-text'>*video*</span>
        </div>
    </div>

    <div className='header-empresas'>
        <h2 className='header-h2'>Experiencias Previas</h2>
    </div>

    <div className='tilt-wrapper'>
    {services.map((text, i) => (
        <ServiceCard key={i} text={text} />
    ))}
    </div>

    <Comencemos/>
    </>
  )
}

export default Empresas