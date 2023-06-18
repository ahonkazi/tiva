import React from 'react'
import Preloader from "../../Views/Preloader"
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import TestimonialPageArea from '../../Views/TestimonialPageView/TestimonialPageArea'
import TeamTotal from '../../Views/TeamPageView/TeamTotal'
import TestimonialClientsArea from './TestimonialClientsArea'
const TestomonialsPage = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={PageBannarImg} urlName={"Our Testomonials"} />
            <TestimonialPageArea />
            <TeamTotal />
            <TestimonialClientsArea />
            <Footer />
            <GoTop />
        </>
    )
}

export default TestomonialsPage