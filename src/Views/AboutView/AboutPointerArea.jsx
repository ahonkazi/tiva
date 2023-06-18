import React from 'react'
import countShape from "../../assets/images/shape/count-shape-1.png"
const AboutPointerArea = () => {
    return (

        <div className="container">
            <div className="painter-area" data-aos="fade-up" data-aos-duration="900">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="count-info">
                            <h3 className="odometer odometer-auto-theme">500</h3>
                            <span className="target">
                                <i className='bx bx-wifi-0'></i>
                            </span>
                            <p><i className='bx bx-plus'></i>Project Done</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="count-info">
                            <h3 className="odometer odometer-auto-theme">150</h3>
                            <span className="target">
                                <i className='bx bx-wifi-0'></i>
                            </span>
                            <p><i className='bx bx-plus'></i>Cup Of Tea</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="count-info">
                            <h3 className="odometer odometer-auto-theme" >120</h3>
                            <span className="target">
                                <i className='bx bx-wifi-0'></i>
                            </span>
                            <p><i className='bx bx-plus'></i>Total Employee
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="count-info">
                            <h3 className="odometer odometer-auto-theme" >50</h3>
                            <span className="target">
                                <i className='bx bx-wifi-0'></i>
                            </span>
                            <p><i className='bx bx-plus'></i>Win Awards</p>
                        </div>
                    </div>
                </div>
                <img className="count-shape-1" src={countShape} alt="image" />
            </div>
        </div>

    )
}

export default AboutPointerArea