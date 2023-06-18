import React from 'react'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import Preloader from "../../Views/Preloader"
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import ServiceDetailsArea from '../../Views/ServiceDetailsView/ServiceDetailsArea'
const ServiceDetails = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={PageBannarImg} urlName={" Service Details"} />
            <ServiceDetailsArea />
            <GoTop />
            <Footer />

        </>
    )
}

export default ServiceDetails