import React from 'react'
import Preloader from '../../Views/Preloader'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import Footer from '../../Views/Footer/Footer'
import GoTop from '../../Views/GoTop/GoTop'
import pageBannarImg from "../../assets/images/about/about-image-9.png"
import BlogDetailsArea from '../../Views/BlogDetailsView/BlogDetailsArea'
import PageBannar from '../../Views/PageBannar/PageBannar'
const BlogDetails = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />
            <PageBannar bannarImg={pageBannarImg} urlName={"Blog Details"} />
            <BlogDetailsArea />
            <Footer />
            <GoTop />
        </>
    )
}

export default BlogDetails