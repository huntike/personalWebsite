import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

export const footer = () => {
    return (
        <footer id="footer">
            <a href="#" className='footer__logo'>Logan Le Lay</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.facebook.com/logan.lelay.5"><FaFacebookF/></a>
                <a href="https://www.instagram.com/huntike_/"><FiInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;Logan Le Lay</small>
            </div>
        </footer>
    )
}
export default footer

