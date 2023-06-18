import React from 'react'
import subTitleShape from '../../assets/images/shape/video-shape-1.png'
import playIcon from '../../assets/images/svg/play.svg'
const AboutStoryArea = () => {
    return (

        <div className="story-area pt-100">
            <div className="container-fluid">
                <div className="section-title">
                    <span className="sub-title">
                        <img className="sub-title-shape" src={subTitleShape} alt="image" />
                        CHECK 1 MIN OUR INTRO VIDEO
                    </span>
                    <h2>Our Most Recent Data Analytics Strategy Story</h2>
                </div>
                <a className="popup-youtube popup-btn" href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                    <div className="play-icon">
                        <img src={playIcon} alt="image" />
                    </div>
                </a>
            </div>
        </div>)
}

export default AboutStoryArea