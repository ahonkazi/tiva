import { motion, AnimatePresence } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { GetContext } from '../../context/AppContext'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import DropdownItemWrapper from './DropdownItemWrapper'

const NavbarAll = () => {
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
    const [dropdownActiveIndex, SetDropdownActiveIndex] = useState(false);
    const dropdown = [
        {
            dropdownTitle: "Home",
            dropdownPath: "/",

            dropdownList: [
                { title: "Home Demo - One", path: "/" },
                { title: "Home Demo - Two", path: "/" },
                { title: "Home Demo - Three", path: "/" },
                { title: "Home Demo - Four", path: "/" },
                { title: "Home Demo - Five", path: "/" },
                { title: "Home Demo - Six", path: "/" },
            ]

        },
        {
            dropdownTitle: "Pages",
            dropdownPath: false,

            dropdownList: [
                { title: "About Us", path: "/about" },
                { title: "Pricing", path: "/pricing" },
                { title: "Team", path: "/team", subDropdown: true, subDropdownList: [{ title: "Team", path: "/team" }, { title: "Team Details", path: "/team-details" }] },
                { title: "FAQs", path: "/faqs" },
                { title: "Testimonials", path: "/testimonials" },
                { title: "My Account", path: "/account" },
                { title: "Terms Conditions", path: "/terms-conditions" },
                { title: "Privacy Policy", path: "/privacy-policy" },
                { title: "404 Error", path: "/error" },
            ]

        },
        {
            dropdownTitle: "Services",
            dropdownPath: "/service",

            dropdownList: [
                { title: "Service", path: "/service" },
                { title: "Service Details", path: "/service-details" },

            ]

        }
        ,
        {
            dropdownTitle: "Portfolio",
            dropdownPath: "/portfolio",

            dropdownList: [
                { title: "Portfolio", path: "/portfolio" },
                { title: "Portfolio Details", path: "/portfolio-details" },

            ]

        },
        {
            dropdownTitle: "Blog",
            dropdownPath: "/blog",

            dropdownList: [
                { title: "Blog", path: "/blog" },
                { title: "Blog Details", path: "/blog-details" },

            ]

        },
    ]

    return (
        <div className={`navbar-area ${isSticky ? 'is-sticky' : ''}`}>
            <div className="mobile-responsive-nav">
                <div className="container">
                    <div className="mobile-responsive-menu  mean-container">

                        {/* mean bar */}
                        <div className="mean-bar">
                            <Link to="" onClick={() => setMobileMenu(!mobileMenu)} className={`meanmenu-reveal ${mobileMenu ? '' : 'meanclonse'}`} style={{ right: 0, left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>{!mobileMenu ? <span><span><span></span></span></span> : <motion.div animate={{ x: "0px" }} transition={{ duration: 0.2 }} initial={{ x: "-100vw" }}>X</motion.div>}</Link>
                            <nav className="mean-nav">
                                <AnimatePresence>
                                    {mobileMenu && (
                                        <motion.div initial={{ height: 0 }} exit={{ height: 0 }} transition={{ type: 'keyframes', duration: 0.3 }} animate={{ height: "auto" }} style={{ overflow: "hidden" }}>
                                            <ul className="navbar-nav m-auto"  >
                                                {
                                                    dropdown.map((dropdownItem, index) =>
                                                        dropdownItem.dropdownPath === false ?
                                                            <li onClick={() => { SetDropdownActiveIndex(index + 1); dropdownActiveIndex === (index + 1) ? SetDropdownActiveIndex(false) : SetDropdownActiveIndex(index + 1); context.setActiveNav(index + 1) }} className="nav-item">
                                                                <Link to={dropdownItem.dropdownPath} className={`nav-link ${(context.activeNav === (index + 1)) ? 'active' : ''} dropdown-toggle`}>
                                                                    {dropdownItem.dropdownTitle}
                                                                </Link>

                                                                <AnimatePresence>
                                                                    {
                                                                        (dropdownActiveIndex && (dropdownActiveIndex === index + 1)) && (
                                                                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.5 }} style={{ overflow: "clip" }}>
                                                                                <DropdownItemWrapper dropdownIndex={index} dropdownSingleItem={dropdownItem} />
                                                                            </motion.div>
                                                                        )
                                                                    }
                                                                </AnimatePresence>
                                                                <Link className="mean-expand" to="" style={{ fontSize: "18px" }} >+</Link>
                                                            </li> :
                                                            <li onClick={() => { SetDropdownActiveIndex(index + 1); dropdownActiveIndex === (index + 1) ? SetDropdownActiveIndex(false) : SetDropdownActiveIndex(index + 1); context.setActiveNav(index + 1) }} className="nav-item">
                                                                <NavLink to={dropdownItem.dropdownPath} className={`nav-link ${(context.activeNav === (index + 1)) ? 'active' : ''} dropdown-toggle`}>
                                                                    {dropdownItem.dropdownTitle}
                                                                </NavLink>

                                                                <AnimatePresence>
                                                                    {
                                                                        (dropdownActiveIndex && (dropdownActiveIndex === index + 1)) && (
                                                                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.5 }} style={{ overflow: "clip" }}>
                                                                                <DropdownItemWrapper dropdownIndex={index} dropdownSingleItem={dropdownItem} />
                                                                            </motion.div>
                                                                        )
                                                                    }
                                                                </AnimatePresence>
                                                                <Link className="mean-expand" to="" style={{ fontSize: "18px" }} >+</Link>
                                                            </li>
                                                    )
                                                }
                                                <li onClick={() => context.setActiveNav(0)} className="nav-item mean-last">
                                                    <Link to="/contact" className="nav-link">Contact Us</Link>
                                                </li>
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
                            <Link to="/">
                                <img src={logo} className="main-logo" alt="logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desktop-nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} className="main-logo" alt="logo" />
                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                {
                                    dropdown.map((item, index) =>
                                        item.dropdownPath ?

                                            <li className="nav-item">
                                                <NavLink onClick={() => context.setActiveNav(index + 1)} to={item.dropdownPath} className={`nav-link ${(context.activeNav === (index + 1)) ? 'active' : ''}  dropdown-toggle`}>
                                                    {item.dropdownTitle}
                                                </NavLink>
                                                <ul className="dropdown-menu">

                                                    {

                                                        item.dropdownList.map(subItem =>


                                                            subItem.subDropdown ?

                                                                <li onClick={() => context.setActiveNav(index + 1)} className="nav-item">
                                                                    <NavLink to="/team" className="nav-link dropdown-toggle">
                                                                        Team
                                                                    </NavLink>
                                                                    <ul className="dropdown-menu">

                                                                        {
                                                                            subItem.subDropdownList.map(subDropdownItem =>
                                                                                <li onClick={() => context.setActiveNav(index + 1)} className="nav-item">
                                                                                    <NavLink to={subDropdownItem.path} className="nav-link">{subDropdownItem.title}</NavLink>
                                                                                </li>
                                                                            )
                                                                        }


                                                                    </ul>
                                                                </li> :

                                                                <li onClick={() => context.setActiveNav(index + 1)} className="nav-item">
                                                                    <NavLink to={subItem.path} className="nav-link">{subItem.title}</NavLink>
                                                                </li>

                                                        )
                                                    }

                                                </ul>
                                            </li> :

                                            <li className="nav-item">
                                                <Link onClick={() => context.setActiveNav(index + 1)} to={item.dropdownPath} className={`nav-link ${(context.activeNav === (index + 1)) ? 'active' : ''}  dropdown-toggle`}>
                                                    {item.dropdownTitle}
                                                </Link>
                                                <ul className="dropdown-menu">

                                                    {

                                                        item.dropdownList.map(subItem =>


                                                            subItem.subDropdown ?

                                                                <li onClick={() => context.setActiveNav(index + 1)} className="nav-item">
                                                                    <NavLink to="/team" className="nav-link dropdown-toggle">
                                                                        Team
                                                                    </NavLink>
                                                                    <ul className="dropdown-menu">

                                                                        {
                                                                            subItem.subDropdownList.map(subDropdownItem =>
                                                                                <li onClick={() => context.setActiveNav(index + 1)} className="nav-item">
                                                                                    <NavLink to={subDropdownItem.path} className="nav-link">{subDropdownItem.title}</NavLink>
                                                                                </li>
                                                                            )
                                                                        }


                                                                    </ul>
                                                                </li> :

                                                                <li onClick={() => context.setActiveNav(index + 1)} className="nav-item">
                                                                    <NavLink to={subItem.path} className="nav-link">{subItem.title}</NavLink>
                                                                </li>

                                                        )
                                                    }


                                                </ul>
                                            </li>

                                    )
                                }




                                {/* basic   */}
                                <li onClick={() => context.setActiveNav(0)} className="nav-item">
                                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                </li>

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
                                    <a href="/account" className="login-btn">Login</a>
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

export default NavbarAll