import React from 'react'
import shape from "../../assets/images/shape/shape-1.png"
const TeamTotalCard = ({ count, title, iconClass }) => {
    return (
        <div className="total-count">
            <div className="total-shape">
                <i className={`${iconClass} icon`}></i>
                <img src={shape} alt="image" />
            </div>
            <h1 className="odometer" style={{ marginTop: "15px" }} data-count="500">{count}
                <span className="target">
                    +
                </span>
            </h1>

            <p><i className='bx bx-plus'></i>{title}</p>
        </div>)
}

export default TeamTotalCard