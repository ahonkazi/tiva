import React from 'react'
import Preloader from '../../Views/Preloader'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import PageBannar from '../../Views/PageBannar/PageBannar'
import bannarImg from '../../assets/images/about/about-image-9.png'
import AboutArea from '../../Views/AboutView/AboutArea'
import AboutStoryArea from '../../Views/AboutView/AboutStoryArea'
import AboutPointerArea from '../../Views/AboutView/AboutPointerArea'
import AboutPortfolioArea from '../../Views/AboutView/AboutPortfolioArea'
import AboutPricingArea from '../../Views/AboutView/AboutPricingArea'
import AboutTestimonialArea from '../../Views/AboutView/AboutTestimonialArea'
import AboutClientsArea from '../../Views/AboutView/AboutClientsArea'
import AboutBlogArea from '../../Views/AboutView/AboutBlogArea'
import Footer from '../../Views/Footer/Footer'
import NewLatter2 from '../../Views/NewsLatter/NewLatter2'
import GoTop from '../../Views/GoTop/GoTop'

const AboutPage = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={bannarImg} urlName={"About Us"} />
            <AboutArea />
            <AboutStoryArea />
            <AboutPointerArea />
            <AboutPortfolioArea />
            <AboutPricingArea />
            <AboutTestimonialArea />
            <AboutClientsArea />
            <AboutBlogArea />
            <NewLatter2 />
            <Footer />
            <GoTop />
        </>


    )
}

export default AboutPage