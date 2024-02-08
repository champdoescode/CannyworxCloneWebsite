import React from 'react'

export const Footer = () => {
    return (
        <div className="w-full">
        <div className="px-16 py-64  grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-3 bg-[#111517]">
            <div className="flex w-full h-fit rounded aspect-auto mt-6 grid-items">
                <div className="mr-4">
                    <img className="" src="./images/logo.png" alt="select"/>
                    <div className="mt-8 text-[#666666]">Cannyworx Digital is a full-service digital marketing agency and an affordable web design company with designers and hustlers who eat, drink & sleep digital design and marketing.</div>
                    <div className="mt-8"><a className="text-xl text-[#666666] hover:text-white" href="#">hello@cannyworx.com</a></div>
                    <div className="mt-4"><a className="text-2xl font-black text-[#666666]" href="#">CALL 9881007881</a></div>
                </div>
            </div>
            <div className="flex w-full h-fit rounded aspect-auto mt-6 grid-items">
                <div className="mr-4">
                    <div className="text-xl text-white font-bold">OFFICES:</div>
                    <div className="text-sm tracking-widest mt-4 font-semibold text-zinc-400">PUNE</div>
                    <div className="text-sm mt-2 text-[#666666]">Office 001, City Vista,</div>
                    <div className="text-sm mt-2 text-[#666666]">Near World Trade Center, Kharadi,</div>
                    <div className="text-sm mt-2 text-[#666666]">Pune – 411014</div>
                    <div className="text-sm tracking-widest my-6 font-semibold text-zinc-400">MUMBAI</div>
                    <div className="text-sm mt-2 text-[#666666]">Office A12,</div>
                    <div className="text-sm mt-2 text-[#666666]">Nav-Neelima, Opp Canosa High School,</div>
                    <div className="text-sm mt-2 text-[#666666]">Sher-e-Punjab, Andheri East,</div>
                    <div className="text-sm mt-2 text-[#666666]">Mumbai – 400093</div>
                    
                </div>
            </div>
            <div className="flex w-full rounded aspect-auto mt-6">
                <div className="mr-4 w-full">
                    <div className="text-xl text-white font-bold">REQUEST A QUOTE</div>
                    <div className="w-full">
                        <input className="w-full my-4 bg-transparent border-[#666666] text-sm border p-2 placeholder-[#666666]" type="text" placeholder="YOUR NAME"/>
                        <input className="w-full my-4 bg-transparent border-[#666666] text-sm border p-2 placeholder-[#666666]" type="text" placeholder="YOUR NAME"/>
                        <input className="w-full my-4 bg-transparent border-[#666666] text-sm border p-2 placeholder-[#666666]" type="text" placeholder="YOUR NAME"/>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">LOGO</label>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">WEBSITE DESIGN</label>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">WEBSITE REDESIGN</label>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">BROCHURE/FLYERS</label>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">CORPORATE PRESENTATION</label>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">SOCIAL MEDIA MANAGEMENT</label>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">WEBSITE MAINTENANCE</label>
                    </div>
                    <div className="my-2">
                        <input type="checkbox"/>
                        <label className="ml-2 mb-4 text-sm text-[#666666]" htmlFor="">OTHER</label>
                    </div>
                </div>
                
            </div>
            
            
        </div>
        </div>
    )
}
