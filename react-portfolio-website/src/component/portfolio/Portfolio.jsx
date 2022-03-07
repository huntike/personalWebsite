import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
    {
        id : 1,
        image: IMG1,
        title:'Lightsaber',
        github:'https://github.com/huntike/visualDesign/tree/main/lightsaber',
        demo:''
    },
    {
        id : 2,
        image: IMG2,
        title:'Custom Button',
        github:'https://github.com/huntike/visualDesign/tree/main/lightsaber',
        demo:''
    },
    {
        id : 3,
        image: IMG3,
        title:'Neon Button',
        github:'https://github.com/huntike/visualDesign/tree/main/lightsaber',
        demo:''
    },
    {
        id : 4,
        image: IMG4,
        title:'Radar',
        github:'https://github.com/huntike/visualDesign/tree/main/lightsaber',
        demo:''
    },
    {
        id : 5,
        image: IMG1,
        title:'lorem',
        github:'https://github.com/huntike/visualDesign/tree/main/lightsaber',
        demo:''
    },
    {
        id : 6,
        image: IMG1,
        title:'lorem',
        github:'https://github.com/huntike/visualDesign/tree/main/lightsaber',
        demo:''
    },
]
const portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                
                {
                    data.map(({id,image,title,github,demo}) => {
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn"target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export default portfolio
