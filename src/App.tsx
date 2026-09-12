
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Technologies from './Components/Technologies'
import type { ITechnologies } from './Components/Type/Technology'
import { Suspense } from 'react'
import { HiH1, HiH2 } from 'react-icons/hi2'
const dataFetch = async():Promise<ITechnologies[]>=>{
        const res=await fetch('/data.json');
        const data=await res.json();
        return data;
  }
  const technologyPromise=dataFetch();

function App() {
  return (
    <>
    {/*Navbar*/}
    <Nav></Nav>
    <Hero></Hero>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Technologies technologyPromise={technologyPromise} />
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
