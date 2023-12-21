import React from 'react'
import "./automatizacion-styles.css"
import LandingPageNav from '../landing-page/LandingPageNav'
import "../landing-page/landing-page-styles.css"
import Carousel from './slider/Carousel'
import Comencemos from '../../components/Comencemos'

function Automatizacion() {
  return (
    <>
    <LandingPageNav/>
    <div className='automatizacion-wrapper'>
        <h2 className='header-h2' id='header-h2-automatizacion'>Automatización</h2>
        <div className='black-div'><span className='black-div-white'>*video*</span></div>
        <p className='lorem'>Te pondría un texto super largo con toda la información pero son solo palabras, no es real. Ahí tienes
        un vídeo mío, así soy yo. Si te interesa, puedo ayudarte, si te lo piensas, no es para tí.</p>
    </div>
    <div className='experiencias-container'>
        <h2 className='experiencias-h2'>Experiencias</h2>
        <Carousel/>
    </div>
    <Comencemos/>
    </>
  )
}

export default Automatizacion
