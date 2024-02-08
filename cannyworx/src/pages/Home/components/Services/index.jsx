import React from 'react'
import Service from '../Service'
const services = [
    {
        serial: 1,
        title: "BEAUTIFUL WEBSITES",
        description: "Website design & development is a combination of both, experience and approach. We start by tackling what you want to convey, the problem you want to solve, or the reaction you want to provoke. We then utilize an agile methodology to execute rapidly.",
        image: "./images/img1.jpg",
    },
    {
        serial: 2,
        title: "ECOMMERCE ENABLEMENT",
        description: "E-commerce plays a role vital role in gaining and retaining customers. Incorporate directory management or have more targeted marketing behind it, your business can do all of these and more with the right e-commerce solution.",
        image: "./images/img2.jpg",

    },
    {
        serial: 3,
        title: "BRANDING",
        description: "We have knowledge, tools and experiences since we have catered to many digital solutions and revolutions over the past decade. Digital and social makeovers certainly cannot be at the end of the tunnel of your growth strategy.",
        image: "./images/img3.jpg",

    },
    {
        serial: 4,
        title: "INSTAGRAM & FACEBOOK MARKETING",
        description: "We have knowledge, tools and experiences since we have catered to many digital solutions and revolutions over the past decade. Digital and social makeovers certainly cannot be at the end of the tunnel of your growth strategy.",
        image: "./images/img4.jpg",

    },
]

const Services = () => {
    return (
        <div>
            {
                services.map(service => <Service {...service}/>)
            }
        </div>
    )
}

export default Services
