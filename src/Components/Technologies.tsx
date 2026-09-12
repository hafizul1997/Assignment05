
import { use } from 'react';
import type { ITechnologies } from './Type/Technology';

export interface ITechnologiesProps{
    technologyPromise:Promise<ITechnologies[]>;
}
const Technologies=({technologyPromise}:ITechnologiesProps) => {
    console.log(technologyPromise);
  const technologies= use(technologyPromise);
 console.log(technologies);
    return (
        <div>
           
        </div>
    )
};

export default Technologies;