import React from 'react'
import downloadIcon from "../../assets/images/svg/download.svg"
const FaqDownload = () => {
    return (
        <div className="download">
            <h4>Download</h4>
            <button>
                <img className="download-icon" src={downloadIcon} alt="image" />Download
                Brochure
            </button>
            <button>
                <img className="download-icon" src={downloadIcon} alt="image" />Download
                Application
            </button>
        </div>)
}

export default FaqDownload