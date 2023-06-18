import React from 'react'
import brandShape1 from "../../assets/images/shape/hero-shape-2.png"
import brandImg from "../../assets/images/about/about-image-10.png"
import { Link } from 'react-router-dom'
const BrandArea = () => {
    return (

        <div className="brand-area pt-100 bg-color-f6fcff">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="brand-content">
                            <div className="section-heading">
                                <span className="about-sub-title">
                                    <img className="sub-title-image" src={brandShape1} alt="image" />
                                    Contact Us
                                </span>
                                <h2>Need A Brand New Project?</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the have suffered
                                alteration in some form, by injected humour, or randomised words which don't look even ipsum
                                dolor sit amet.</p>
                            <Link className="common-btn" to="/contact">Contact Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="brand-image" data-aos="zoom-in" data-aos-duration="1000">
                            <img className="about-image-10" src={brandImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BrandArea