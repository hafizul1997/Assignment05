import React from 'react';
import HeroImage from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <section>  
            <div className='max-w-[1280px] mx-auto' >  
        <div className='flex  items-center justify-between'>
            <div>
                    <h1 className='text-6xl font-black text-[#0f172a] py-5'>Build Your Ideal <br/>
                   <span className='bg-gradient-to-r from-[#d91b7e] to-[#7c3aed] bg-clip-text text-transparent'> Development Stack </span></h1>
<p className='text-[#475569] text-xl'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
<div className='flex gap-4 mt-7'>
    <button className='bg-gradient-to-r from-[#f97316] via-[#f0556f] to-[#ec4899] text-white font-bold px-6 py-3 rounded-2xl'>Explore Technologies</button>
    <button>Learn More</button>
</div>
            </div>
            <img src={HeroImage} alt="Banner Stack"/>
        </div>
    </div>
    </section>
    );
};
export default Hero;