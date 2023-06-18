import React from 'react'
import FaqAccordionItem from './FaqAccordionItem'
import { useState } from 'react'

const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const accodionData = [

        {
            head: `How Long Should A Business Plan Be?`,
            body: [
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beata nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut
                fugit,seconsequuntur magni dolores eos qui ration.`,
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatd nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut.`


            ]


        },
        {
            head: `Read the most popular Medical News & Article?`,
            body: [
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beata nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut
                fugit,seconsequuntur magni dolores eos qui ration.`,
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatd nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut.`


            ]
        },
        {
            head: `How to Change my Password easily?`,
            body: [
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beata nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut
                fugit,seconsequuntur magni dolores eos qui ration.`,
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatd nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut.`


            ]

        },
        {
            head: `What Are Your Terms And Conditions?`,
            body: [
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beata nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut
                fugit,seconsequuntur magni dolores eos qui ration.`,
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatd nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut.`


            ]
        },
        {
            head: `What Kinds of Payment Do You Accept?`,
            body: [
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beata nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut
                fugit,seconsequuntur magni dolores eos qui ration.`,
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatd nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut.`


            ]
        },
        {
            head: `Why do the prices in the shop sometimes change?`,
            body: [
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beata nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut
                fugit,seconsequuntur magni dolores eos qui ration.`,
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatd nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut.`


            ]
        },
        {
            head: `What can I use to build my website?`,
            body: [
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beata nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut
                fugit,seconsequuntur magni dolores eos qui ration.`,
                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq otam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatd nt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut.`


            ]

        },
    ]
    return (
        <div className="accordion" id="accordionFAQ">

            {
                accodionData.map((item, index) =>
                    <FaqAccordionItem accodionActiveIndex={activeIndex} accodionSetActiveIndex={setActiveIndex} accordionCount={index+1} accordionBody={item.body} accordionHead={item.head} />
                )
            }
        </div >

    )
}

export default FaqAccordion