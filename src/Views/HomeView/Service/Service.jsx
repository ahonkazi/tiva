import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import ServiceCard from './ServiceCard';

// service card img
import Service1Img from "../../../assets/images/provide/provide-1.png"
import Service2Img from "../../../assets/images/provide/provide-2.png"
import Service3Img from "../../../assets/images/provide/provide-3.png"
import shape1 from "../../../assets/images/shape/service-shape-1.png"
const Service = () => {
    return (



        <div class="home provide-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span class="title-ron">our Services</span>
                    <h2>We Provide Big Data Analytics Technical Data Issues</h2>
                </div>
                <div class="provide-slider">

                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        grabCursor={true}
                     
                        speed={1000}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ServiceCard img={Service1Img} title={"Big Data Consulting"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service2Img} title={"Artificial Intelligence"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service3Img} title={"Machine Learning"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service1Img} title={"Big Data Consulting"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service2Img} title={"Artificial Intelligence"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service3Img} title={"Machine Learning"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service1Img} title={"Big Data Consulting"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service2Img} title={"Artificial Intelligence"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service3Img} title={"Machine Learning"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service1Img} title={"Big Data Consulting"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service2Img} title={"Artificial Intelligence"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard img={Service3Img} title={"Machine Learning"} link={"service-details.html"} text={"Lorem ipsum dolor sit amet,consec adipiscing elit.Ut elit tellus,luctus ectetur ullam corper mattis,pulvinar."} />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <img class="provide-shape-1 rotate" src={shape1} alt="image" />
        </div >

    )
}

export default Service