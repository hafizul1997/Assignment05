
import { use } from 'react';
import type { ITechnologies } from './Type/Technology';
import TechnologyCard from './TechnologyCard';

export interface ITechnologiesProps{
    technologyPromise:Promise<ITechnologies[]>;
}
const Technologies=({technologyPromise}:ITechnologiesProps) => {
    console.log(technologyPromise);
  const technologies= use(technologyPromise);
 console.log(technologies);
    return (
    <div className='max-w-[1280px] mx-auto mb-20'> 
           <h1>Explore The Technologies</h1>
           <p>Pick one technology per category to build your ideal stack </p>
       <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-9'>
            <div className='grid grid-cols-3 gap-5 '>  
           {technologies.map((technology: ITechnologies) => (
  <TechnologyCard key={technology.id} technology={technology}> </TechnologyCard>))}
          </div>  
    </div>
        <div className='col-span-3'>
          <div className="card bg-base-100 w-[288px] shadow-sm h-[auto]">
          <div className='p-6'>
               <h1 className='text-2xl font-bold pb-2'>Your Stack</h1>
               <p className=" pb-2 text-xs opacity-60 tracking-wide">No Tecnologies Selected Yet</p>
          </div>
          <div className='card-body'>
               <div className="flex h-[80px] w-[250px] items-center justify-center rounded-xl border-2 border-blue-100 bg-blue-50 text-center text-sm font-medium text-slate-600">
                Your stack is Empty
</div>

          </div>
        </div>
                
       </div>
     </div>
     </div>
    )
};

export default Technologies;