import React from 'react'
import Preloader from "../../Views/Preloader"
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import PrivacyPolicyArea from '../../Views/PrivacyPolicyView/PrivacyPolicyArea'
const PrivacyPolicy = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={PageBannarImg} urlName={"Privacy Policy"} />
            <PrivacyPolicyArea />
            <Footer />
            <GoTop />
        </>
    )
}

export default PrivacyPolicy