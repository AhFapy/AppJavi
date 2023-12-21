import "./landing-page-styles.css";
import DefaultButton from '../../components/DefaultButton';

function LandingPageNav() {
  const handleClick = function() {
    window.location.href = "/";
  }

  return (
    <div className='lp-nav'>
      <div className='lp-nav-left'>
        <div className="logo-circle">
          <img onClick={handleClick} className="nav-logo" src="/logo-no-bg.png"></img>
        </div>
      </div>
      <div className='lp-nav-right'>
        <a className="nav-btn" route="/cliente">Área de Cliente</a>
      </div>
    </div>
  )
}

export default LandingPageNav