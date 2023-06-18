import React from 'react'
import Preloader from '../../Views/Preloader'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import Footer from '../../Views/Footer/Footer'
import GoTop from '../../Views/GoTop/GoTop'
import pageBannarImg from "../../assets/images/about/about-image-9.png"
import PageBannar from '../../Views/PageBannar/PageBannar'
import ProfileAuthArea from '../../Views/MyAccountView/ProfileAuthArea'
const AccountPage = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={pageBannarImg} urlName={"My Account"} />
            <ProfileAuthArea />
            <Footer />
            <GoTop />
        </>
    )
}

export default AccountPage