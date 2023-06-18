import React from 'react'
import Preloader from '../../Views/Preloader'
import NavbarAll from '../../Views/Navbar/NavbarAll'
import Sidebar from '../../Views/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../../Views/Footer/Footer'
import GoTop from '../../Views/GoTop/GoTop'

const Error404 = () => {
    return (
        <>
            <Preloader />
            <NavbarAll />
            <Sidebar />

            <div class="error-area ptb-100 bg-color-f8f8f8">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="error-content-wrap">
                            <h1>
                                <span class="a">4</span> <span class="red">0</span> <span class="b">4</span>
                            </h1>
                            <h3>Oops! Page Not Found</h3>
                            <p>The page you were looking for could not be found.</p>
                            <Link to="/" class="default-btn two">
                                Return To Home Page</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <GoTop />

        </>
    )
}

export default Error404