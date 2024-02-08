import React from 'react'

const Feature = (props) => {

    return (
        <div className="flex w-full rounded shadow-lg aspect-auto mt-6 grid-items">
                <div className="w-40 mr-4">
                    <img className="h-16 w-16" src={props.icon} alt="select"/>
                </div>
                <div>
                    <div className="font-bold text-xl text-white mb-4">{props.title}</div>
                    <div className="text-[#666666]">{props.description}</div>
                </div>
            </div>
    )
}

export default Feature
