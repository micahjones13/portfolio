import React from 'react'
import BannerImg from '../assets/img/dogbanner.jpg'
import './banner.scss';

const Banner = (props) => {
    return(
        <div className = 'banner-container'>
            <h1> Micah Jones </h1>
            <div className = 'img-container'>
                <img className = 'banner-img' src = {BannerImg} alt = 'banner img'></img>
            </div>
        </div>
    )

}

export default Banner;