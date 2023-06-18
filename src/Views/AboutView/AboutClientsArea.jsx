import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import shape from "../../assets/images/shape/clients-shape-1.png"
import subTitleshape from "../../assets/images/shape/hero-shape-2.png"
const AboutClientsArea = () => {
    return (

        <div className="clients-area pt-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img className="sub-title-shape" src={subTitleshape} alt="image" />
                        Over 100K+ Clients
                    </span>
                    <h2>Join 100.000+ Companies Who Have Reached</h2>
                </div>


                <div className="clients-info" data-aos-="fade-up" data-aos-duration="900">
                    <div className="clients-slider owl-carousel owl-theme">


                        <Swiper
                            slidesPerView={5}
                            centeredSlides={false}
                            speed={500}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-5.png" alt="image" />
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-6.png" alt="image" />
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-7.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-8.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-9.png" alt="image" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="clients-slider-two owl-carousel owl-theme">
                        <Swiper
                            grabCursor={true}
                            slidesPerView={4}
                            centeredSlides={false}
                            speed={500}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-10.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-11.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-12.png" alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src="assets/images/logo/logo-13.png" alt="image" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>

            <img className="clients-shape-1 moveVertical" src={shape} alt="image" />
        </div>

    )
}

export default AboutClientsArea