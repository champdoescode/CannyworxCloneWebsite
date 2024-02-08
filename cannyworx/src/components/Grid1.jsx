import React from 'react'
import Feature from './Feature'
import './Grid1.css'

export const Grid1 = ({features}) => {
    return (
        <div className="w-full">
        <div className="p-16 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-3 bg-[#111517]">
            {
                features.map(feature => <Feature {...feature} key={feature.title} />)
            }
        </div>
        </div>
    )
}
