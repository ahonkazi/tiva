import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './pages/Blogpage/BlogPage'
import ContactPage from './pages/Contactpage/ContactPage'
import ServicePage from './pages/ServicePage/ServicePage'
import PortfolioPage from './pages/Portfoliopage/PortfolioPage'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import PortfolioDetails from './pages/PortfolioDetails/PortfolioDetails'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import AboutPage from './pages/AboutPage/AboutPage'
import PricingPlan from './pages/PricingPlan/PricingPlan'
import TeamPage from './pages/TeamPage/TeamPage'
import TeamDetails from './pages/TeamDetails/TeamDetails'
import FaqPage from './pages/FaqPage/FaqPage'
import TestomonialsPage from './pages/TestimonialsPage/TestomonialsPage'
import AccountPage from './pages/AccountPage/AccountPage'
import TermConditionPage from './pages/TermConditionPage/TermConditionPage'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import ComingSoon from './pages/ComingSoon/ComingSoon'
import Error404 from './pages/Eorros/Error404'
const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/service-details' element={<ServiceDetails />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/portfolio-details' element={<PortfolioDetails />} />
            <Route path='/blog-details' element={<BlogDetails />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/pricing' element={<PricingPlan />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/team-details' element={<TeamDetails />} />
            <Route path='/faqs' element={<FaqPage />} />
            <Route path='/testimonials' element={<TestomonialsPage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='/terms-conditions' element={<TermConditionPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/coming-soon' element={<ComingSoon />} />
            <Route path='/error' element={<Error404 />} />
        </Routes>
    )
}

export default App