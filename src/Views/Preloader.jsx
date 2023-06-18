import React, { useEffect, useState } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 700)
    return (
        <>
            <div id="preloader" className={`${loading ? '' : 'd-none'}`}>
                <div id="loader"></div>
            </div>
        </>
    )
}

export default Preloader