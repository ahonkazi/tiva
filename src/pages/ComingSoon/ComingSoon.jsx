import React from 'react'
import Preloader from '../../Views/Preloader'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import ComingSoonArea from '../../Views/ComingSoonView/ComingSoonArea'
import Footer from '../../Views/Footer/Footer'
import GoTop from '../../Views/GoTop/GoTop'

const ComingSoon = () => {
  return (
    <>
      <Preloader />
      <NavbarAll />
      <Sidebar />
      <ComingSoonArea />
      <Footer />
      <GoTop />

    </>
  )
}

export default ComingSoon