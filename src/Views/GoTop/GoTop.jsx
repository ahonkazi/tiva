import React, { useState } from 'react'

const GoTop = () => {
    const [GoTopStatus, setGoTopStatus] = useState(false)
    window.addEventListener("scroll", function () {
        if (window.scrollY > 650) {
            setGoTopStatus(true)
        } else {
            setGoTopStatus(false)
        }
    })
    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (

        <div onClick={goTop} className={`go-top ${GoTopStatus ? 'active' : ''}`}>
            <i className='bx bxs-up-arrow-alt'></i>
        </div>
    )
}

export default GoTop