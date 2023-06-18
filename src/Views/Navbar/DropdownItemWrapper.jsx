import React from 'react'
import { NavLink } from 'react-router-dom'

const DropdownItemWrapper = ({ dropdownSingleItem }) => {
    return (
        <ul className="dropdown-menu" style={{ display: "flex", flexDirection: "column" }} >

            {
                dropdownSingleItem?.dropdownList.map((item) =>
                    <li className="nav-item">
                        <NavLink to={item.path} className="nav-link">{item.title}</NavLink>
                    </li>
                )
            }
        </ul>
    )
}

export default DropdownItemWrapper