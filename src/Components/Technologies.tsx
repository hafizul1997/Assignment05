import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../Components/Type/Technology";
import { toast } from "react-toastify";
interface ITechnologiesProps {
  technologyPromise: Promise<ITechnologies[]>;
  cart: ITechnologies[];
  setCart: Dispatch<SetStateAction<ITechnologies[]>>;
}
const Technologies = ({
  technologyPromise,
  cart,
  setCart,
}: ITechnologiesProps) => {
  const technologies = use(technologyPromise);
    return (
   <div className='max-w-[1280px] mx-auto mb-20'> 
           <h1 className='text-2xl md:text-3xl lg:text-5xl font-extrabold'>Explore The <span className='bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'> Technologies </span></h1>
           <p className='text-[#64748B] mb-15 mt-4'>Pick one technology per category to build your ideal stack </p>

  <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-12 gap-6">

    {/* Technologies */}
    <div className="w-full md:col-span-2 lg:col-span-9">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
           {technologies.map((technology: ITechnologies) => (
  <TechnologyCard 
  key={technology.id}
   technology={technology}
    cart={cart}
     setCart={setCart}></TechnologyCard>))}
          </div>  
    </div>
       <div className="w-full md:col-span-1 lg:col-span-3">
          <div className="sticky top-[100px] rounded-2xl border border-slate-200 bg-base-100 shadow-sm  bg-white p-5">
            {/* Heading + Count */} 
            <div> 
              <h2 className="text-xl font-bold">Your Stack</h2>
               <p className="text-[#94A3B8] mt-2 text-sm"> {cart.length === 0 ? "No Technologies Selected Yet" : `${cart.length} Tecnologies selected`} </p> 
            </div>
          
           {/* Selected List */}
            {cart.length > 0 ? ( <div className="mt-4 space-y-3"> {cart.map((item) => ( <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3" > 
              {/* Image + Name + Category */}
           <div className="flex min-w-0 items-center gap-3"> 
              <img src={item.icon} alt={item.name} className="h-10 w-10 rounded-lg bg-slate-100 p-2" />
                 <div className="min-w-0">
                     <h3 className="truncate text-sm font-bold"> {item.name} </h3> 
                     <p className="text-xs text-slate-500"> {item.category} </p> 
                 </div> 
           </div> 

               {/* Individual Remove */}
           <button
  onClick={() => {
    setCart((prev) =>
      prev.filter((technology) => technology.id !== item.id)
    );

    toast.info(`${item.name} removed from your stack!`);
  }}
  className="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-red-500"
> 
            <img src="/public/icon/remove.png" className='h-[10px] w-[10px]' alt="Remove Icon" /> </button> </div> ))} 

                  {/* Remove All - LAST */} 

                  <button onClick={() =>{
                    setCart([]);
                  toast.info("All technologies removed from your stack!");}} 
                  className="mt-4 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50" > 
                    Remove All </button>
                   </div> ) : ( <div className="mt-5 flex h-[80px] items-center justify-center rounded-xl border-2 border-dashed border-blue-100 bg-blue-50 text-sm text-slate-500"> Your Stack is Empty </div> )}
                   
                    </div>
                
       </div>
     </div>
     </div>
    )
};

export default Technologies;