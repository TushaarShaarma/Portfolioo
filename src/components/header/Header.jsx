import React from 'react'
import CTA from './CTA'
import './Header.css'
// import ME from '../../assests/me.png'
import TSme from '../../assests/TSme.jpg'
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tushar Sharma</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <Headersocials/>

        <div className="me">
          {/* <img src={ME} alt="me" /> */}
          <img src={TSme} alt="me" />

        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header