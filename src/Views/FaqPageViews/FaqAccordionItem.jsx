import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
const FaqAccordionItem = ({ accordionHead, accodionSetActiveIndex, accodionActiveIndex, accordionCount, accordionBody }) => {
    return (
        <div className="accordion-item">
            <button onClick={() => { (accodionActiveIndex === accordionCount) ? accodionSetActiveIndex(false) : accodionSetActiveIndex(accordionCount) }} className={`accordion-button ${accodionActiveIndex === accordionCount ? '' : 'collapsed'} `} type="button"
            >
                <span>{(accordionCount) < 10 ? ('0' + (accordionCount)) : (accordionCount)}</span> {accordionHead}
            </button>
            <AnimatePresence>
                {accodionActiveIndex === accordionCount &&
                    (<motion.div style={{ overflow: "clip" }} initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.25 }} >
                        <div className="accordion-collapse collapse show"
                        >
                            <div className="accordion-body">
                                {
                                    accordionBody?.map(item =>
                                        <p>{item}</p>
                                    )
                                }
                            </div>
                        </div>
                    </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default FaqAccordionItem