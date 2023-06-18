import React from 'react'
import img from "../assets/images/shape/hero-shape-2.png"
const MainSectionTitle = ({ subTitle, mainTitle }) => {
    return (
        <div className="section-title">
            <span className="sub-title">
                <img className="sub-title-shape" src={img} alt="image" />
                {subTitle}
            </span>
            <h2>{mainTitle}</h2>
        </div>)
}

export default MainSectionTitle