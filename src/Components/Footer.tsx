import React from 'react';
import NavLogo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
                <div className='grid grid-cols-12 mb-15 justify-between  gap-8'>
                       <div className='col-span-6 text-[#64748b]'>
                                <img src={NavLogo} alt="" className='mb-4' />
                                <p className='mb-4'>Curated tools, technologies, and resources for developers building modern software.</p>
                                <ul className='list-none flex gap-4 text-[#454e5a] font-semibold mt-10'>
                                    <li>Github</li>
                                    <li>Twitter</li>
                                    <li>LinkedIn</li>
                                </ul>
                       </div>
                       <div className='col-span-2 list-none text-[#64748b]'>
                                <h1 className='text-[#0f172a] font-bold mb-4'>Product</h1>
                                <li className='mb-4'>Home</li>
                                <li className='mb-4'>Technologies</li>
                                <li>Projects</li>
                       </div>
                       <div className='col-span-2 list-none text-[#64748b]'>
                                <h1 className='text-[#0f172a]  font-bold mb-4'>Company</h1>
                                <li className='mb-4'>About</li>
                                <li className='mb-4'>Contact</li>
                                <li className='mb-4'>Careers</li>
                       </div>
                       <div className='col-span-2 list-none text-[#64748b]'>
                                <h1 className='text-[#0f172a] font-bold mb-4'>Legal</h1>
                                <li className='mb-4'>Privacy Policy</li>
                                <li>Terms of Policy</li>
                       </div>
                </div>
                <div className='flex justify-between py-10  text-[#64748b] '>
                        <p>© 2026 Dev Stack. All rights reserved.</p>
                        <ul className='list-none flex gap-4'>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                </div>
     </div>
    );
};

export default Footer;