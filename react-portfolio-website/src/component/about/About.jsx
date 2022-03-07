import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/me-about.jpg'



const about = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>about me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Ecole</h5>
                            <small>Ynov Toulouse</small>
                        </article>
                        <article className="about__card">
                            <FiUser className="about__icon"/>
                            <h5>Clients</h5>
                            <small>number</small>
                        </article> <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10 Complete</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem voluptates similique 
                        perferendis, minima explicabo, illo dolores animi tempora, excepturi ipsam iste? Vero sapiente 
                        distinctio quasi excepturi sunt illum molestias.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>


        </section>
    )
}

export default about
