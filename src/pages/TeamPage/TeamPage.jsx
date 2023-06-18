import React from 'react'
import Preloader from "../../Views/Preloader"
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import TeamArea from '../../Views/TeamPageView/TeamArea'
import TeamTotal from '../../Views/TeamPageView/TeamTotal'
import Testimonial from '../../Views/HomeView/Testimonial/Testimonial'
const TeamPage = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={PageBannarImg} urlName={"Our Team"} />
            <TeamArea />
            <TeamTotal />
            <Testimonial />
            <Footer />
            <GoTop />

        </>
    )
}

export default TeamPage