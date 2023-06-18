import React from 'react'
import Preloader from "../../Views/Preloader"
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import ServiceArea from '../../Views/ServiceView/ServiceArea/ServiceArea'
import Footer from '../../Views/Footer/Footer'
import GoTop from '../../Views/GoTop/GoTop'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"

const ServicePage = () => {
  return (
    <>
      <Preloader />
      <NavbarAll />
      <Sidebar />
      <PageBannar bannarImg={PageBannarImg} urlName={" Our Services"} />
      <ServiceArea />
      <Footer />
      <GoTop />

    </>
  )
}

export default ServicePage