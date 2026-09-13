
import NavLogo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
                <div className='grid grid-cols-12 mb-15 justify-between  gap-8'>
                       <div className='col-span-6 text-[#64748b]'>
                                <img src={NavLogo} alt="" className='mb-4' />
                                <p className='mb-4'>Curated tools, technologies, and resources for developers building modern software.</p>
                                <ul className='list-none flex gap-4 text-[#454e5a] font-semibold mt-10'>
                                    <li className='hover:text-[#d91b7e]'><a href="https://github.com/hafizul1997/">Github</a></li>
                                    <li className='hover:text-[#d91b7e]'><a href="#">Twitter</a></li>
                                    <li className='hover:text-[#d91b7e]'><a href="https://www.linkedin.com/in/hafizul-islam-9a86b8360/">LinkedIn</a></li>
                                </ul>
                       </div>
                       <div className='col-span-2 list-none text-[#64748b]'>
                                <h1 className='text-[#0f172a] font-bold mb-4'>Product</h1>
                                <li className='mb-4 hover:text-[#d91b7e]'><a href="#">Home</a></li>
                                <li className='mb-4 hover:text-[#d91b7e]'><a href="#">Technologies</a></li>
                                <li className='hover:text-[#d91b7e]'><a href="#">Projects</a></li>
                       </div>
                       <div className='col-span-2 list-none text-[#64748b]'>
                                <h1 className='text-[#0f172a]  font-bold mb-4'>Company</h1>
                                <li className='mb-4 hover:text-[#d91b7e]'> <a href="#">About</a></li>
                                <li className='mb-4 hover:text-[#d91b7e]'><a href="#">Contact</a></li>
                                <li className='mb-4 hover:text-[#d91b7e]'><a href="#">Careers</a></li>
                       </div>
                       <div className='col-span-2 list-none text-[#64748b]'>
                                <h1 className='text-[#0f172a] font-bold mb-4'>Legal</h1>
                                <li className='mb-4 hover:text-[#d91b7e]'><a href="#"> Privacy Policy</a></li>
                                <li className='hover:text-[#d91b7e]'><a href="#">Terms of Policy</a></li>
                       </div>
                </div>
                <div className='flex justify-between py-10  text-[#64748b] '>
                        <p>© 2026 Dev Stack. All rights reserved.</p>
                        <ul className='list-none flex gap-4'>
                            <li className='hover:text-[#d91b7e]'><a href='#'>Privacy</a></li>
                            <li className='hover:text-[#d91b7e]'><a href='#'>Terms</a></li>
                        </ul>
                </div>
     </div>
    );
};

export default Footer;