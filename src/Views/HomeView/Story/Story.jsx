import React from 'react'
import videoShape from "../../../assets/images/shape/video-shape-1.png"
import playIcon from "../../../assets/images/svg/play.svg"
const Story = () => {
    return (
        <div class="story-area pt-100">
            <div class="container-fluid">
                <div class="section-title">
                    <span class="sub-title">
                        <img class="sub-title-shape" src={videoShape} alt="image" />
                        CHECK 1 MIN OUR INTRO VIDEO
                    </span>
                    <h2>Our Most Recent Data Analytics Strategy Story</h2>
                </div>
                <a class="popup-youtube popup-btn" href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                    <div class="play-icon">
                        <img src={playIcon} alt="image" />
                    </div>
                </a>
            </div>
        </div>

    )
}

export default Story