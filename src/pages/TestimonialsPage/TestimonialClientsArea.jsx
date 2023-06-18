import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const TestimonialClientsArea = () => {
    return (
        <div class="clients-area clients-testimonials pt-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">
                        <img class="sub-title-shape" src="assets/images/shape/hero-shape-2.png" alt="image" />
                        Over 100K+ Clients
                    </span>
                    <h2>Join 100.000+ Companies Who Have Reached</h2>
                </div>
                <div class="clients-info">
                    <div class="clients-slider owl-carousel owl-theme">
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
                    



                </div>

            </div>
        </div>
    )
}

export default TestimonialClientsArea;