import React from 'react'
// h-[calc(100vh-76.5px)]
export const Landing = () => {
    return (
        <div>
            <div className="mt-16 absolute top-0 z-50 w-full">
                <div className="w-full text-amber-600 flex">
                    <div className="w-6/12 h-screen flex justify-evenly -rotate-90 ml-24 text-sm tracking-[6px] text-[#666666]">
                        <div>
                            <div>DIGITAL</div>
                            <div>MARKETING</div>
                        </div>
                        <div>
                            <div>BRANDING</div><div> AND WEBSITES</div>
                        </div>
                    </div>

                    <div className="w-6/12 flex flex-col justify-center font-black text-white text-8xl tracking-tighter">
                        <div>WEB DESIGN</div>
                        <div><span className="text-[#666666]">AND </span><span>DIGITAL</span> </div>
                        <div>MARKETING</div>
                        <hr class="h-px w-24 my-8 bg-white border-2 dark:bg-white"></hr>
                        <div className="flex">
                            <button className="nav-btn px-10 py-4 bg-[#fc0d1d] text-white rounded-full font-light text-sm tracking-[2px]">VIEW PORTFOLIO</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 z-50 w-full flex items-center justify-center mb-4">
                <a href="#">
                <img className="h-6 w-8" src="./images/scrollDown.png" alt="ReadMore"/>
                </a>
            </div>
            
        </div>
    )
}
