import { motion, AnimatePresence } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { GetContext } from '../../context/AppContext'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [otherOption, setOtherOption] = useState(false)
    const [isSticky, setSticky] = useState(false)
    const [searchOverlayStatus, setSearchOverlayStatus] = useState(false)
    const context = useContext(GetContext)

    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    })
    const navBarData = [

        {
            title: "Home", path: "/"
        },
        {
            title: "Services", path: "/service"
        },
        {
            title: "Portfolio", path: "/portfolio"
        },
        {
            title: "Blog", path: "/blog"
        },
        {
            title: "Contact Us", path: "/contact"
        },
    ]
    return (
        <div className={`navbar-area ${isSticky ? 'is-sticky' : ''}`}>
            <div className="mobile-responsive-nav">
                <div className="container">
                    <div className="mobile-responsive-menu  mean-container">

                        {/* mean bar */}
                        <div className="mean-bar">
                            <a href="#nav" onClick={() => setMobileMenu(!mobileMenu)} className={`meanmenu-reveal ${mobileMenu ? '' : 'meanclonse'}`} style={{ right: 0, left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>{!mobileMenu ? <span><span><span></span></span></span> : <motion.div animate={{ x: "0px" }} transition={{ duration: 0.2 }} initial={{ x: "-100vw" }}>X</motion.div>}</a>
                            <nav className="mean-nav">
                                <AnimatePresence>
                                    {mobileMenu && (
                                        <motion.div initial={{ height: 0 }} exit={{ height: 0 }} transition={{ type: 'keyframes', duration: 0.3 }} animate={{ height: "auto" }} style={{ overflow: "hidden" }}>
                                            <ul className="navbar-nav m-auto" style={{ overflow: "hidden" }} >
                                                {
                                                    navBarData.map((item, index) =>
                                                        <li onClick={() => context.setActiveNav(0)} className="nav-item">
                                                            <NavLink to={item.path} className="nav-link p-2">
                                                                {item.title}
                                                            </NavLink>

                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </motion.div>
                                    )

                                    }

                                </AnimatePresence>



                                <div className="others-options d-flex align-items-center">
                                    <div className="option-item">
                                        <i className="search-btn  bx bx-search"></i>
                                        <i className="close-btn bx bx-x"></i>
                                        <div className="search-overlay search-popup">
                                            <div className="search-box">
                                                <form className="search-form">
                                                    <input className="search-input" placeholder="Search..." type="text" hvkeyboarddefined="true" />
                                                    <button className="search-button" type="submit">
                                                        <i className="bx bx-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu">
                                        <Link to="/account" className="login-btn">Login</Link>
                                        <button className="menu-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                            <i className="bx bx-menu"></i>
                                        </button>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* mean bar */}

                        <div className="logo">
                            <Link href="/">
                                <img src={logo} className="main-logo" alt="logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- desktop-nav Start--> */}
            <div className="desktop-nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" href="/">
                            <img src={logo} className="main-logo" alt="logo" />
                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                {
                                    navBarData.map((item, index) =>
                                        <li onClick={() => context.setActiveNav(0)} className="nav-item">
                                            <NavLink to={item.path} className="nav-link p-2">
                                                {item.title}
                                            </NavLink>

                                        </li>
                                    )
                                }
                            </ul>


                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <span onClick={() => setSearchOverlayStatus(!searchOverlayStatus)}>
                                        <i className="search-btn bx bx-search" style={searchOverlayStatus ? { display: 'none' } : { display: 'block' }}></i>
                                        <i className={`close-btn bx bx-x ${searchOverlayStatus ? 'active' : ''}`}></i>
                                    </span>
                                    <div className={`search-overlay search-popup  ${searchOverlayStatus ? 'active' : ''}`}>
                                        <div className='search-box'>
                                            <form className="search-form">
                                                <input className="search-input" placeholder="Search..." type="text" />
                                                <button className="search-button" type="submit">
                                                    <i className="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu">
                                    <a href="my-account.html" className="login-btn">Login</a>
                                    <button onClick={() => context.setSidebarStatus(true)} className="menu-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight">
                                        <i className='bx bx-menu'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- desktop-nav end--> */}
            <div className="others-option-for-responsive">
                <div className="container">
                    <div onClick={() => setOtherOption(!otherOption)} className="dot-menu">
                        <div className="inner">
                            <div className="circle circle-one"></div>
                            <div className="circle circle-two"></div>
                            <div className="circle circle-three"></div>
                        </div>
                    </div>
                    <div className={`container ${otherOption ? 'active' : ''}`}>
                        <div className="option-inner">
                            <div className="others-options">
                                <div className="option-item">

                                    <i onClick={() => setSearchOverlayStatus(true)} className={`search-btn bx bx-search ${searchOverlayStatus ? 'd-none' : 'd-block'}`}></i>
                                    <i onClick={() => setSearchOverlayStatus(false)} className={`close-btn bx bx-x ${searchOverlayStatus ? 'd-block' : 'd-none'}`}></i>

                                    <div className={`search-overlay search-popup ${searchOverlayStatus ? 'active' : ''}`}>
                                        <div className='search-box'>
                                            <form className="search-form">
                                                <input className="search-input" placeholder="Search..." type="text" />
                                                <button className="search-button" type="submit">
                                                    <i className="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <a href="my-account.html" className="common-btn">Login</a>
                                <button onClick={() => context.setSidebarStatus(!context.sidebarStatus)} className="menu-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight">
                                    <i className='bx bx-menu'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar