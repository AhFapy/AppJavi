import React, { useState } from 'react'
import LandingPageNav from './LandingPageNav'
import "./landing-page-styles.css"
import BoxComponent from '../../components/BoxComponent'

function LandingPage() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleSelection = function(id) {
    setSelectedDiv("");
    setSelectedDiv(id)
  }

  return (
    <div className="landing-page-container">
          <LandingPageNav/>
        <div className='lp-header-div'>
          <h2 className='header-h2' id='header-h2'>Un Sueño Sin Plan, Sigue Siendo Un Sueño.</h2>
        </div>
        <div className='box-container'>

          <div className='box-functionality-div' onClick={() => handleSelection("coaching")}>
          <BoxComponent title="Automatización" selected={selectedDiv === "coaching" ? "selected-box" : "box"} route="/automatizacion" texto="- Tiempo, + Dinero"/>
          </div>

          <div className='box-functionality-div' id='empresas' onClick={() => handleSelection("empresas")}>
            <BoxComponent title="Servicios para Empresas" selected={selectedDiv === "empresas" ? "selected-box" : "box"} route="/empresas" texto="Automatiza Procesos y Monetiza tu Hobby"/>
          </div>

          <div className='box-functionality-div' id='newsletter' onClick={() => handleSelection("newsletter")}>
            <BoxComponent title="Newsletter" selected={selectedDiv === "newsletter" ? "selected-box" : "box"} route="/newsletter"/>
          </div>

        </div>
    </div>
  )
}

export default LandingPage
