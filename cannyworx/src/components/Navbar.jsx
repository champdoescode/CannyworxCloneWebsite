import React from 'react'
import react, { useEffect, useState } from "react";
import './Navbar.css';

export const Navbar = () => {
    const [navbar,setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 728){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground)
    return (
        

        
        <div className="z-50 w-full">
        <img className="h-screen w-screen" src="./images/Home.jpg" alt="Home"/>
        <nav className={"border-gray border-b-[0.5px] bg-transparent shadow-lg p-2 fixed top-0 z-100 w-full navbar active" + (navbar ? '' : 'active' )}>
            <div className="w-full flex items-center justify-between nav-container">
              <div className="flex items-center m-4 ml-8 font-bold brand">
                  <a href="#" className="text-xl text-white">CANNYWORX</a>
              </div>
              <div className="flex item-center nav-links font-bold text-xs/[8px]">
                <ul className="flex flex-row items-center text-gray-300 tracking-wide">
                  <li className="p-4 hover:text-white">
                    <a class='group transition-all duration-300 ease-in-out hover:text-white' href='#'> 
                             <span class='bg-left-bottom bg-gradient-to-r from-[#fc0d1d] to-[#fc0d1d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'> 
                                             HOME
                             </span>
                    </a>
                  </li>
                  <li className="p-4 hover:text-white">
                    <a class='group transition-all duration-300 ease-in-out hover:text-white' href='#'> 
                             <span class='bg-left-bottom bg-gradient-to-r from-[#fc0d1d] to-[#fc0d1d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'> 
                             CAPABILITIES
                             </span>
                    </a>
                  </li>
                  <li className="p-4 hover:text-white">
                    <a class='group transition-all duration-300 ease-in-out hover:text-white' href='#'> 
                             <span class='bg-left-bottom bg-gradient-to-r from-[#fc0d1d] to-[#fc0d1d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'> 
                                             WORK
                             </span>
                    </a>
                  </li>
                  <li className="p-4 hover:text-white">
                    <a class='group transition-all duration-300 ease-in-out hover:text-white' href='#'> 
                             <span class='bg-left-bottom bg-gradient-to-r from-[#fc0d1d] to-[#fc0d1d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'> 
                                             CONTACT
                             </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mr-8 nav-btn-container">
                  <button className="nav-btn px-6 py-2 bg-[#fc0d1d] text-white rounded-full font-normal text-sm tracking-wider">REQUEST A QUOTE</button>
              </div>
              <div className="hidden p-2 menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-16 h-12 p-2 rounded menu-svg">
                  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="hidden bg-gray-500 text-white nav-mob-links">
            <a className="hover:underline decoration-1" href="">About Us</a>
            <a className="hover:underline decoration-1" href="">About Us</a>
            <a className="hover:underline decoration-1" href="">About Us</a>
            <a className="hover:underline decoration-1" href="">About Us</a>
            </div> 
        </nav>
        </div>
        
      
    )
}
