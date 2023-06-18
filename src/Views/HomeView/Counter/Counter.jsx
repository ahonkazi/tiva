import React from 'react';
import counterShape1 from "../../../assets/images/shape/count-shape-2.png"
import counterShape2 from "../../../assets/images/shape/count-shape-3.png"
import counterShape3 from "../../../assets/images/shape/count-shape-4.png"
const Counter = () => {

    return (
        <div class="container">
            <div class="painter-area count-area">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-info">
                            <div class="awk">
                                <i class="flaticon-075-rocket rocket"></i>
                                <h3 class="myodometer myodometer-auto-theme" >500
                                </h3>
                                <span class="target">
                                    <i class='bx bx-plus'></i>
                                </span>
                                <p>
                                    <i class='bx bx-plus'></i>Project Done
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-info">
                            <i class="flaticon-053-coffee rocket"></i>
                            <h3 class="myodometer myodometer-auto-theme">
                                150
                            </h3>
                            <span class="target">
                                <i class='bx bx-plus'></i>
                            </span>
                            <p>
                                <i class='bx bx-plus'></i>Cup Of Tea
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-info">
                            <i class="flaticon-065-businessman rocket"></i>
                            <h3 class="myodometer myodometer-auto-theme">120</h3>
                            <span class="target">
                                <i class='bx bx-plus'></i>
                            </span>
                            <p>
                                <i class='bx bx-plus'></i>Total Employee
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-info">
                            <i class="flaticon-108-medal rocket"></i>
                            <h3 class="myodometer myodometer-auto-theme">50</h3>
                            <span class="target">
                                <i class='bx bx-plus'></i>
                            </span>
                            <p>
                                <i class='bx bx-plus'></i>Win Awards
                            </p>
                        </div>
                    </div>
                </div>

                <img class="count-shape-1" src={counterShape1} alt="image" />
                <img class="count-shape-3" src={counterShape2} alt="image" />
                <img class="count-shape-4" src={counterShape3} alt="image" />
            </div>
        </div>
    )
}

export default Counter