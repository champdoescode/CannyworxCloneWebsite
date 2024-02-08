import React from 'react'

export const Grid3 = () => {
    return (
        <div className="w-full">
        <div className="p-16 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-3 bg-[#111517]">
            <div className="flex w-full rounded shadow-lg aspect-auto mt-6 grid-items">
                <div className="w-40 mr-4">
                    <img className="h-16 w-16" src="./images/select.png" alt="select"/>
                </div>
                <div>
                    <div className="font-bold text-xl text-white mb-4">WE DISCUSS</div>
                    <div className="text-[#666666]">We’re a full-service digital marketing agency that hustles hard to makes users happy while infusing everything we do with the heart.</div>
                </div>
            </div>
            <div className="flex w-full rounded shadow-lg aspect-auto mt-6">
                <div className="w-40 mr-4">
                    <img className="h-16 w-16" src="./images/jigsaw.png" alt="select"/>
                </div>
                <div>
                    <div className="font-bold text-xl text-white mb-4">WE DEVELOP</div>
                    <div className="text-[#666666]">We see beyond the insights and take you to the eye stand.</div>
                </div>
            </div>
            <div className="flex w-full rounded shadow-lg aspect-auto mt-6">
                <div className="w-40 mr-4">
                    <img className="h-16 w-16" src="./images/rocket-ship.png" alt="select"/>
                </div>
                <div>
                    <div className="font-bold text-xl text-white mb-4">WE DELIVER</div>
                    <div className="text-[#666666]">As a multifaceted digital marketing agency, we craft beautiful solutions that outdo business goals and garner recognition.</div>
                </div>
            </div>
            
            
        </div>
        </div>
    )
}
