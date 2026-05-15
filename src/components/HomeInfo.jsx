import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='info-text'>
                {text}
            </p>

            <Link to={link} className='glass-btn'>
                <span>{btnText}</span>

                <img
                    src={arrow}
                    alt="arrow"
                    className='w-4 h-4 object-contain brightness-0 invert'
                />
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1 className='hero-card'>
            <span className='hero-title'>
                Hi, I’m <span className='name'>Vedant</span>
                <span className='wave'> 👋</span>
            </span>

            <span className='hero-subtitle'>
                Full Stack Developer
            </span>
        </h1>
    ),
    2: (
        <InfoBox
            text="Full Stack Developer passionate about building scalable web applications and cloud-based solutions."
            link="/about"
            btnText="Learn More"

        />
    ),
    3: (
        <InfoBox
            text="I've worked on a variety of projects, from simple websites to complex web applications."
            link="/projects"
            btnText="Visit Projects"

        />
    ),
    4: (
        <InfoBox
            text="Interested in working together? Let's connect!"
            link="/contact"
            btnText="Let's Talk"

        />
    ),
}



const HomeInfo = ({ currentStage }) => {
    return (
        <div>{renderContent[currentStage] || null}</div>
    )
}

export default HomeInfo