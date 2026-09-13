
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Technologies from './Components/Technologies'
import type { ITechnologies } from './Components/Type/Technology'
import { Suspense, useState } from 'react'
const dataFetch = async():Promise<ITechnologies[]>=>{
        const res=await fetch('/data.json');
        const data=await res.json();
        return data;
  }
  const technologyPromise=dataFetch();

function App() {
  const[cart,setCart]=useState<ITechnologies[]>([]);
  return (
    <>
    {/*Navbar*/}
    <Nav></Nav>
    <Hero></Hero>
    <Suspense fallback={
       <div className="flex justify-center py-20">
      <div className="loading loading-dots loading-lg"></div>
    </div>
    }>
    <Technologies technologyPromise={technologyPromise} cart={cart} setCart={setCart}/>
    </Suspense>
    <Footer></Footer>
     {/*Hero Section*/}
      {/* Product list*/}
     {/*Add to Cart*/}
      {/*Footer */}
    </>
  )
}

export default App
