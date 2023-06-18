import React from 'react'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Preloader from '../../Views/Preloader'
import Sidebar from '../../Views/Sidebar/Sidebar'
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import PageBannar from '../../Views/PageBannar/PageBannar'
import pageBannarImg from "../../assets/images/about/about-image-9.png"
import PortfolioDetailsView from '../../Views/PortfolioDetailsView/PortfolioDetailsView'
const PortfolioDetails = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={pageBannarImg} urlName={"Portfolio Details"} />
            <PortfolioDetailsView />
            <GoTop />
            <Footer />
        </>
    )
}

export default PortfolioDetails