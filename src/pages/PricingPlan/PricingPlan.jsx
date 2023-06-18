import React from 'react'
import Preloader from "../../Views/Preloader"
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import PricingArea from '../../Views/PricingPlanViews/PricingArea'
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
const PricingPlan = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={PageBannarImg} urlName={"Our Pricing"} />
            <PricingArea />
            <Footer />
            <GoTop />

        </>
    )
}

export default PricingPlan