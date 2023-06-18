import React from 'react'
import Shape from "../../../assets/images/shape/who-shape-1.png"
import AboutImg from "../../../assets/images/about/about-image-4.png"
const About = () => {
    return (
        <div class="about-area about-area-two ptb-70 bg-color-f6fcff">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-image" data-aos="fade-up" data-aos-duration="2000" >
                            <img class="about-image-1" src={AboutImg} alt="image" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="section-heading">
                                <span class="title-ron">About Us</span>
                                <h2>Focusing on Analysis, Techniques & Experience</h2>
                            </div>
                            <p>We prioritize analysis, leverage advanced techniques, and rely on our vast experience to deliver exceptional results. Trust us to uncover insights, optimize strategies, and drive success in your business.</p>
                            <ul>
                                <li>
                                    <i class="flaticon-083-check-mark"></i>
                                    Various analysis options.
                                </li>
                                <li>
                                    <i class="flaticon-083-check-mark"></i>
                                    Page Load (time, size, number of requests).
                                </li>
                                <li>
                                    <i class="flaticon-083-check-mark"></i>
                                    Big data analysis.
                                </li>
                            </ul>
                            <a class="common-btn" href="about.html">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>

            <img class="about-shape-1 rotate" src={Shape} alt="image" />
        </div>

    )
}

export default About