import React from 'react'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Preloader from '../../Views/Preloader'
import Sidebar from '../../Views/Sidebar/Sidebar'
import Footer from '../../Views/Footer/Footer'
import PageBannar from '../../Views/PageBannar/PageBannar'
import pageBannarImg from '../../assets/images/about/about-image-9.png'
import ContactArea from '../../Views/ContactViews/ContactArea'
import ContactMail from '../../Views/ContactViews/ContactMail'
import GetInTouch from '../../Views/ContactViews/GetInTouch'
import GoTop from '../../Views/GoTop/GoTop'
const ContactPage = () => {
  return (

    <>

      <Preloader />
      <NavbarAll />
      <Sidebar />
      <PageBannar bannarImg={pageBannarImg} urlName={"Contact Us"} />
      <ContactArea />
      <ContactMail />
      <GetInTouch />
      <Footer />
      <GoTop />


    </>
  )
}

export default ContactPage