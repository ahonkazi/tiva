import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import TestimonialCard from './TestimonialCard';
import user1 from "../../../assets/images/user/user-1.jpg"
import user2 from "../../../assets/images/user/user-2.jpg"
import user3 from "../../../assets/images/user/user-3.jpg"
const Testimonial = () => {
    const swiperRef = useRef();
    return (

        <div class="home testimonials-area pt-100 pb-70 bg-color-f6fcff">
            <div class="container">
                <div class="section-title">
                    <span class="title-ron">Our Testimonial</span>
                    <h2>Hear What Our Lovely Clients Say!</h2>
                </div>
                <div class="testimonials-slider">
                    <button className='slider-prev' onClick={() => swiperRef.current?.slidePrev()} >
                        <i class="flaticon-134-arrow-left"></i>
                    </button>
                    <button className='slider-next' onClick={() => swiperRef.current?.slideNext()}>
                        <i class="flaticon-137-right-arrow"></i>
                    </button>
                    <Swiper
                        ref={swiperRef}
                        grabCursor={true}
                        speed={1000}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        keyboard={true}
                        modules={[Navigation, Mousewheel, Keyboard]}
                        className="mySwiper"
                        navigation={true}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}


                    >

                        <SwiperSlide>
                            <TestimonialCard userImg={user1} username="Allison A Gabriella" userRole="Customer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard userImg={user2} username="Maria A Quintero" userRole="Customer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard userImg={user3} username="Allison A Gabriella" userRole="Customer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard userImg={user1} username="Allison A Gabriella" userRole="Customer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard userImg={user2} username="Maria A Quintero" userRole="Customer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard userImg={user3} username="Allison A Gabriella" userRole="Customer" />
                        </SwiperSlide>



                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Testimonial