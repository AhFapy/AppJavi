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
        <h2 className='header-h2'>Automatización</h2>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis animi deleniti a iusto facilis nisi similique maiores vel unde? Velit sunt corrupti perferendis repudiandae, nesciunt saepe nisi nostrum illum?</p>
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
