import React, { useState } from 'react';
import Logo from '.././assets/logo-text.png'

const Nav = () => {
    const[buttonType,setButtonType]=useState("Sign Up");
    const activeHandleButton=(type:"Sign Up"|"Sign In")=>{
        setButtonType(type);
    }
    return (
        <div className='mx-auto max-w-[1280px]'>
            <nav className=' flex  justify-between  items-center h-[80px]'>
                <img src={Logo} alt="Dev Stack Logo" className='h-[32px] w-[137px]' />
                <ul className=' flex  justify-between gap-4 text-[#475569]  font-bold'>
                  <ul className="flex gap-4 text-[#475569]">
                         <li className="text-[#d91b7e]">Home</li>
                        <li className="hover:text-[#d91b7e]">Technologies</li>
                        <li className="hover:text-[#d91b7e]">Projects</li>
                        <li className="hover:text-[#d91b7e]">About</li>
                        <li className="hover:text-[#d91b7e]">Contact</li>
                  </ul>
                </ul>
                <div className='flex  justify-between gap-2'>
    <button onClick={()=>activeHandleButton("Sign In")} className={`px-4 py-2 ${(buttonType === "Sign In")? "btn btn-secondary" : ""} rounded-full`}>Sign In</button>
   <button onClick={()=> activeHandleButton("Sign Up")} className={`px-4 py-2 ${(buttonType ==="Sign Up")? "btn btn-secondary" : ""} rounded-full`}>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;