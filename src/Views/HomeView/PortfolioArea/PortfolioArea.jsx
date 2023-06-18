import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import PortfolioCard from '../../PortfolioCard';
import portfolio1 from "../../../assets/images/portfolio/portfolio-1.jpg"
import portfolio2 from "../../../assets/images/portfolio/portfolio-2.jpg"
import portfolio3 from "../../../assets/images/portfolio/portfolio-3.jpg"
const PortfolioArea = () => {
    return (
        <div className="home portfolio-area pb-100">
            <div className="container">
                <div className="ensure-portfolio" >
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
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
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <PortfolioCard img={portfolio1} title="Data Research" link="Product Analysis" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioCard img={portfolio2} title="Data Security" link="Product Analysis" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioCard img={portfolio3} title="Data Analysis" link="Al Solutions" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PortfolioCard img={portfolio1} title="Data Research" link="Product Analysis" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioCard img={portfolio2} title="Data Security" link="Product Analysis" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioCard img={portfolio3} title="Data Analysis" link="Al Solutions" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PortfolioCard img={portfolio1} title="Data Research" link="Product Analysis" />
                        </SwiperSlide>






                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default PortfolioArea