import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'


const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Logan</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#footer" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default header
