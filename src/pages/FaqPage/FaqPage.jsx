import React from 'react'
import Preloader from "../../Views/Preloader"
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import FaqDetailsPage from '../../Views/FaqPageViews/FaqDetailsPage'
const FaqPage = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={PageBannarImg} urlName={"FAQ"} />
            <FaqDetailsPage />
            <Footer />
            <GoTop />

        </>
    )
}

export default FaqPage