import "./landing-page-styles.css";
import DefaultButton from '../../components/DefaultButton';

function LandingPageNav() {

  return (
    <div className='lp-nav'>
      <div className='lp-nav-left'>
        <span className="lp-nav-header">Javier Marco</span>
      </div>
      <div className='lp-nav-right'>
        <a className="nav-btn" route="/cliente">Área de Cliente</a>
      </div>
    </div>
  )
}

export default LandingPageNav