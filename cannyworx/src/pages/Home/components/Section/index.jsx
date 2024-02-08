import React from 'react'

const Section = (props) => {
    return (
        <div className="bg-[#111517] pt-32 flex flex-col justify-center items-center">
                <div className="text-center text-7xl font-black text-white">{props.heading}</div>
                <hr class="h-1 w-28 my-4 border-[#fc0d1d] border-2 dark:border-[#fc0d1d]"></hr>
                <div className="text-md mb-10 text-[#666666]">{props.description}</div>
        </div>
    )
}

export default Section
