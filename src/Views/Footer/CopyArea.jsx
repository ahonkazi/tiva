import React from 'react'

const CopyArea = () => {
    return (
        <div className="copy-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="first-side">
                            <p>© <span>Tiva </span>is Proudly Owned by <a href="https://hibootstrap.com/"
                                target="_blank">HiBootstrap</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="second-side">
                            <ul>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-conditions.html">Term Or Use</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CopyArea