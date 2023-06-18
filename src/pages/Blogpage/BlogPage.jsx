import React from 'react'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Preloader from '../../Views/Preloader'
import Sidebar from '../../Views/Sidebar/Sidebar'
import GoTop from '../../Views/GoTop/GoTop'
import Footer from '../../Views/Footer/Footer'
import PageBannar from '../../Views/PageBannar/PageBannar'
import PageBannarImg from "../../assets/images/about/about-image-9.png"
import BlogGridArea from '../../Views/BlogGridView/BlogGridArea'
const BlogPage = () => {
  return (

    <>
      <Preloader />
      <NavbarAll />
      <Sidebar />
      <PageBannar bannarImg={PageBannarImg} urlName={"Blog Grid"} />
      <BlogGridArea />
      <Footer />
      <GoTop />

    </>

  )
}

export default BlogPage