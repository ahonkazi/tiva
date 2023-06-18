import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"
const PageBannar = ({ bannarImg, urlName }) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])
    return (
        <div className="page-banner-area bg-color-f6fcff">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="banner-content">
                            <h2>{urlName}</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li style={{marginLeft:"5px"}}>{" " + urlName}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="page-banner-image" data-aos="fade-up" data-aos-duration="900">
                            <img className="about-image-9" src={bannarImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBannar