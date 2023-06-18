import React from 'react'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Preloader from '../../Views/Preloader'
import Sidebar from '../../Views/Sidebar/Sidebar'
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import PortfolioViewArea from '../../Views/PortfolioView/PortfolioViewArea'
import BrandArea from '../../Views/PortfolioView/BrandArea'
import NewsLatter from '../../Views/PortfolioView/NewsLatter'
const PortfolioPage = () => {
  return (
    <>

      <Preloader />
      <NavbarAll />
      <Sidebar />
      <PageBannar bannarImg={PageBannarImg} urlName={"Our Portfolio"} />
      <PortfolioViewArea />
      <BrandArea />
      <NewsLatter />
      <GoTop />
      <Footer />
    </>
  )
}

export default PortfolioPage