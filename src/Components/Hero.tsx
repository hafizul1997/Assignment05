import { useState } from 'react';
import HeroImage from '../assets/banner-stack.png'
const Hero = () => {
    const [herobtn,setHeroBtn]=useState('Explore Technologies');
    const handleHeroBtn=(type:"Explore Technologies"|"Learn More")=>{
        setHeroBtn(type);
    }
    return (
       <section>
  <div className="max-w-[1280px] mx-auto mb-10 px-4">
    
    <div className="md:flex items-center justify-between">

      {/* Content */}
      <div className="w-full">

        <h1 className="text-center md:text-left text-3xl md:text-6xl font-black text-[#0f172a] py-5">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#d91b7e] to-[#7c3aed] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-center md:text-left text-sm md:text-xl text-[#475569]">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-2 md:gap-4 mt-7 items-center">
          
          <button
            onClick={() => handleHeroBtn("Explore Technologies")}
            className={`btn px-6 md:px-14 py-7 rounded-2xl font-bold ${
              herobtn === "Explore Technologies"
                ? "text-white bg-gradient-to-r from-[#f97316] via-[#f0556f] to-[#ec4899]"
                : ""
            }`}
          >
            Explore Technologies
          </button>

          <button
            onClick={() => handleHeroBtn("Learn More")}
            className={`btn px-6 md:px-14 py-7 rounded-2xl font-bold ${
              herobtn === "Learn More"
                ? "text-white bg-gradient-to-r from-[#f97316] via-[#f0556f] to-[#ec4899]"
                : ""
            }`}
          >
            Learn More
          </button>

        </div>
      </div>

      <img
        src={HeroImage}
        alt="Banner Stack"
        className="w-full md:w-auto"
      />

    </div>
  </div>
</section>
    );
};
export default Hero;