import React, { useState } from 'react';
import HeroImage from '../assets/banner-stack.png'
const Hero = () => {
    const [herobtn,setHeroBtn]=useState('Explore Technologies');
    const handleHeroBtn=(type:"Explore Technologies"|"Learn More")=>{
        setHeroBtn(type);
    }
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
    <button onClick={()=>handleHeroBtn("Explore Technologies")} className={`btn px-14 ${herobtn ==="Explore Technologies" ? "text-white bg-gradient-to-r from-[#f97316] via-[#f0556f] to-[#ec4899]" : ""} py-7 rounded-2xl text-bold`}>Explore Technologies</button>
    <button onClick={()=>handleHeroBtn("Learn More")} className={`btn px-22 ${herobtn ==="Learn More" ? "text-white bg-gradient-to-r from-[#f97316] via-[#f0556f] to-[#ec4899]" : ""} py-7 rounded-2xl text-bold`}>Learn More</button>
</div>
            </div>
            <img src={HeroImage} alt="Banner Stack"/>
        </div>
    </div>
    </section>
    );
};
export default Hero;