import React from 'react'
import "./automatizacion-styles.css"
import LandingPageNav from '../landing-page/LandingPageNav'
import "../landing-page/landing-page-styles.css"
import Comencemos from '../../components/Comencemos'
import Slider from '../../components/Slider/Slider'

function Automatizacion() {
  return (
    <>
    <LandingPageNav/>
    <div className='automatizacion-wrapper'>
      <div className='automatizacion-header-container'>
        <span className='header-h2' id='header-h2-automatizacion'>Automatización</span>
      </div>
      <div className='flechas-div'>
        <div className='flecha-izq'>
          <img className='flecha-automatizacion-izq' src="src/assets/flecha.png"></img>
        </div>
        <div className='flecha-der'>
          <img className='flecha-automatizacion-der' src="src/assets/flecha-inversa.png"></img>
        </div>
      </div>
        <div className='black-div'><span className='black-div-white'>*video*</span></div>
        <p className='lorem'>Te pondría un texto <span className='marked'>super largo</span> con toda la información pero son solo palabras,<br/><br/> <span className='marked'>NO SERÍA REAL</span> <br/><br/>
        Ahí tienes un vídeo mío,<br/><br/> <span className='marked'>Así soy yo.</span><br/><br/> Si te interesa, puedo ayudarte, si te lo piensas,<br/><br/> <span className='marked'>no es para tí.</span> </p>
    </div>
    <div className='experiencias-container'>
        <h2 className='experiencias-h2'>Experiencias</h2>
        <Slider/>
    </div>
    <Comencemos/>
    </>
  )
}

export default Automatizacion
