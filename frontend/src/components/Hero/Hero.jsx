import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'
import { Link } from 'react-router-dom';
const Hero = () => {
   
    return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt=''/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div   className="hero-latest-btn">
                <div ><Link style={{ textDecoration: 'none' ,'color': 'white'  }} to='/latest_collection' >Latest collection</Link></div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero