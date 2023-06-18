import React from 'react'
import heroImg3 from "../../../assets/images/hero/hero-image-3.png"
import HeroSape4 from "../../../assets/images/shape/hero-shape-4.png"
import BigShape3 from "../../../assets/images/shape/big-shape-3.png"
import BigShape2 from "../../../assets/images/shape/big-shape-2.png"
const Bannar = () => {

    return (
        <div class="banner-area-two bg-color-000f5c">

            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="banner-two-image " data-aos="fade-up" >
                            <img class="hero-image-2 opacity-100" src={heroImg3} alt="image" />
                            <img class="hero-shape-4 opacity-100" src={HeroSape4} alt="image" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-two-content">
                            <span class="color-title">Big Data Analytics</span>
                            <h1>Big Data Science & Analytics</h1>
                            <p>Embrace the power of big data analysis and embark on a transformative journey with us. Let us empower your organization to unlock the full potential of your data, revolutionize your decision-making processes, and pave the way for a successful future in the digital age.</p>
                            <div class="banner-btn">
                                <a class="style" href="contact.html">Get Started</a>
                                <div class="r-relative">
                                    <a class="popup-youtube popup-btn" href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                                        <div class="play-icon">
                                            Watch Video<i class='bx bx-play'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img class="big-shape-3 FocuS" src={BigShape3} alt="image" />
            <img class="big-shape-2 rotate" src={BigShape2} alt="image" />
        </div>

    )
}

export default Bannar