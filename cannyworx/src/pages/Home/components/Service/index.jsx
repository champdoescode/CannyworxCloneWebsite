import React from 'react'



const Service = (props) => {
    return ( 
        <div className={"flex w-full bg-[#111517] " + (props.serial%2==0 ? 'flex-row-reverse' : '')}>
                <div className="w-4/12 p-8 flex flex-col justify-center">
                    <div><span className="text-[#fc0d1d]">#</span><span className="text-[#666666]">SERVICES</span></div>
                    <div className="-mt-40 text-[256px] text-white services">{ props.serial }</div>
                    <div className="-mt-16 text-white text-3xl font-black">{props.title}</div>
                    {/* <div className=" text-white text-3xl font-black">WEBSITES</div> */}
                    <div className="mt-8 text-sm text-[#666666]">{props.description}</div>
                </div>
                <div className="w-8/12">
                    <img className="w-full" src={props.image} alt=""/>
                </div>
            </div>
    )
}

export default Service
