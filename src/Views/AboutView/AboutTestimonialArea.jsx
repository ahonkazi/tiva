import React from 'react'
import AboutTestimonialCard from './AboutTestimonialCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import aboutImg from "../../assets/images/about/about-image-3.png"
import MainSectionTitle from '../MainSectionTitle';
const AboutTestimonialArea = () => {
    return (

        <div className="testimonial-area ptb-100 bg-color-f6fcff" data-aos="fade-up">
            <div className="container">

                <MainSectionTitle subTitle={"Our Testimonial"} mainTitle={"Hear What Our Lovely Clients Say!"} />


                <div className="row">
                    <div className="col-lg-7">
                        <div className="testimonials">
                            <div className="testimonial-slider owl-carousel owl-theme">
                                <Swiper
                                    slidesPerView={1}
                                    centeredSlides={false}
                                    grabCursor={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    speed={1000}

                                    modules={[Pagination]}
                                >
                                    <SwiperSlide>
                                        <AboutTestimonialCard />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <AboutTestimonialCard />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <AboutTestimonialCard />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="testimonial-image">
                            <img className="about-image-3" src={aboutImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutTestimonialArea