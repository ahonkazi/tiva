import React from 'react'
import aboutImg from "../../../assets/images/about/about-image-6.png";
import logo1 from "../../../assets/images/logo/logo-7.png";
import logo2 from "../../../assets/images/logo/logo-8.png";
import logo3 from "../../../assets/images/logo/logo-12.png";
import logo4 from "../../../assets/images/logo/logo-13.png";
import aboutImg2 from "../../../assets/images/about/about-image-7.png";
const ReachedArea = () => {
    return (

        <div className="reached-area pt-70 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="reached-image" data-aos="zoom-in">
                            <img className="about-image-6" src={aboutImg} alt="image" />
                            <a href="">
                                <img className="reached-logo-1" src={logo1} alt="image" />
                            </a>
                            <a href="">
                                <img className="reached-logo-2" src={logo2} alt="image" />
                            </a>
                            <a href="">
                                <img className="reached-logo-3" src={logo3} alt="image" />
                            </a>
                            <a href="">
                                <img className="reached-logo-4" src={logo4} alt="image" />
                            </a>
                            <img className="about-image-7" src={aboutImg2} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="reached-content">
                            <div className="section-heading">
                                <span className="title-ron">Over 100K+ Clients</span>
                                <h2>Join 100.000+ Companies Who Have Reached</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, butot the majority have
                                    suffered alteration in some form, by injected humo some or randomised words which don't
                                    look even.</p>
                            </div>
                            <a className="common-btn" href="about.html">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReachedArea