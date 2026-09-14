import { useState } from 'react';
import Logo from '.././assets/logo-text.png'

const Nav = () => {
    const[buttonType,setButtonType]=useState("Sign Up");
    const activeHandleButton=(type:"Sign Up"|"Sign In")=>{
        setButtonType(type);
    }
    return (
            
  <nav className='sticky top-0 z-50  bg-white  max-w-[1280px] mx-auto'>
                <div className='mx-auto max-w-[1280px] items-center flex justify-between  h-[80px] '>
                  <div className='dropdown md:hidden'>   
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                 </div>
                  <ul className='  dropdown-content fixed left-0 top-16 w-screen bg-[#fdf2f8]/95 backdrop-blur-md text-center rounded-b-2xl z-50 menu-vertical p-4 shadow-lg  text-[#475569] md:hidden'>
                         <li className="text-[#d91b7e] hover:scale-110 transform duration-100"> <a href="#">Home </a></li>
                        <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100 "><a href="#">Technologies</a></li>
                        <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100"><a href="#">Projects</a></li>
                         <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100 "><a href="#">About</a></li>
                        <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100"><a href="#">Contact</a></li>
                  </ul>

            </div>
               <img src={Logo} alt="Dev Stack Logo" className='md:h-[10px]w-[80px] lg:h-[32px] w-[137px]' />

            <ul className="hidden md:flex  justify-between gap-4 text-[#475569] ">
                         <li className="text-[#d91b7e] hover:scale-110 transform duration-100"> <a href="#">Home </a></li>
                        <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100 "><a href="#">Technologies</a></li>
                        <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100"><a href="#">Projects</a></li>
                        <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100 "><a href="#">About</a></li>
                        <li className="hover:text-[#d91b7e] hover:scale-110 transform duration-100"><a href="#">Contact</a></li>
                  </ul>


                <div className='flex  justify-between gap-1 md:gap-1'>
    <button onClick={()=>activeHandleButton("Sign In")} className={`px-3 py-1 md:px-4 py-2 text-sm ${(buttonType === "Sign In")? "btn btn-secondary" : ""} rounded-full`}>Sign In</button>
   <button onClick={()=> activeHandleButton("Sign Up")} className={`px-4 py-2  text-sm ${(buttonType ==="Sign Up")? "btn btn-secondary" : ""} rounded-full`}>Sign Up</button>
                </div>
            </div>
    </nav>
 
    );
};

export default Nav;