import React from 'react'
import Preloader from '../../Views/Preloader'
import Navbar from '../../Views/Navbar/Navbar'
import Sidebar from '../../Views/Sidebar/Sidebar'
import Bannar from '../../Views/HomeView/Bannar/Bannar'
import AnaliticsArea from '../../Views/HomeView/Analitics/AnaliticsArea'
import About from '../../Views/HomeView/About/About'
import Service from '../../Views/HomeView/Service/Service'
import Story from '../../Views/HomeView/Story/Story'
import Counter from '../../Views/HomeView/Counter/Counter'
import Pricingplan from '../../Views/HomeView/PricingPlan/Pricingplan'
import WhoWeAre from '../../Views/HomeView/WhoWeAre/WhoWeAre'
import NewsLatter from '../../Views/NewsLatter/NewsLatter'
import EnsureArea from '../../Views/HomeView/Ensure/EnsureArea'
import PortfolioArea from '../../Views/HomeView/PortfolioArea/PortfolioArea'
import ReachedArea from '../../Views/HomeView/ReachedArea/ReachedArea'
import Testimonial from '../../Views/HomeView/Testimonial/Testimonial'
import BlogArea from '../../Views/HomeView/BlogArea/BlogArea'
import Footer from '../../Views/Footer/Footer'
import GoTop from '../../Views/GoTop/GoTop'

const Home = () => {
    return (
        <>
            <Preloader />
            <Navbar />
            <Sidebar />
            <Bannar />
            <AnaliticsArea />
            <About />
            <Service />
            <Story />
            <Counter />
            <Pricingplan />
            <WhoWeAre />
            <NewsLatter />
            <EnsureArea />
            <PortfolioArea />
            <ReachedArea />
            <Testimonial />
            <BlogArea />
            <Footer />
            <GoTop />

        </>
    )
}

export default Home