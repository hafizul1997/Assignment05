import React, { use } from 'react';
import { useState } from "react";
import type { ITechnologies } from './Type/Technology';
import { toast } from 'react-toastify';
const badgeStyles: Record<string, string> = {
  Popular: "bg-orange-100 text-orange-600",
  "Top SQL": "bg-blue-100 text-blue-600",
  Essential: "bg-red-100 text-red-600",
  Trending: "bg-pink-100 text-pink-600",
  Modern: "bg-violet-100 text-violet-600",
  NoSQL: "bg-green-100 text-green-600",
  "Top Rated": "bg-yellow-100 text-yellow-700",
  DevOps: "bg-cyan-100 text-cyan-600",
};
interface ITechnologyCardProps{
    technology:ITechnologies;
     cart:ITechnologies[];
    setCart:Dispatch<SetStateAction<ITechnologies[]>>
}

const TechnologyCard = ({technology,cart,setCart}:ITechnologyCardProps) => {
    const isSelected = cart.some(
    (item) => item.id === technology.id
  );

  const handleSelectedButton = () => {
    
    setCart((prev) => [...prev, technology]);

    toast.success(`${technology.name} is added Successfully`);
  };

    return (
        <div>
             <div className={`card w-[288px] bg-base-100 shadow-sm border-2 ${isSelected ? "border-pink-500": "border-transparent"}`}>
          <div className='flex justify-between p-4'>
    <img src={technology.icon} alt="" className='w-[30px] h-[30px]' />
    <div className={`badge ${badgeStyles[technology.badge]}`}>
  {technology.badge}
</div>
          </div>
  
  <div className="card-body">
    <h2 className="card-title">{technology.name}</h2>
    <p>{technology.description}</p>
    <div className='divider'></div>
    <div className='flex justify-between gap-2'> 
      <p className='badge badge-ghost'>{technology.category}</p>
      <p>{technology.difficulty}</p>
      <p className='flex items-center gap-1'><img src="/public/icon/star.png" alt="" className='w-[15px] h-[15px]'/> {technology.rating}</p>
    </div>

    <div className="card-actions justify-center mt-3">
      <button onClick={handleSelectedButton} className={`btn ${
    isSelected ? "bg-pink-400 text-pink-800" : "bg-black"} w-[250px] text-white`} disabled={isSelected}>   {isSelected ?  "✓ Added to Stack" : "Add to Stack" }</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TechnologyCard;