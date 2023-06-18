import React from 'react'
import { Link } from 'react-router-dom'

const ServicePagination = () => {
    return (
        <div className="service-pagination">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <Link className="page-link" to="/service" aria-label="Previous">
                            <span aria-hidden="true">
                                <i className="flaticon-134-arrow-left"></i>
                            </span>
                        </Link>
                    </li>
                    <li className="page-item">
                        <a className="page-link active" href="#">01</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">02</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">03</a>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/service-details" aria-label="Next">
                            <span aria-hidden="true">
                                <i className="flaticon-137-right-arrow"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ServicePagination