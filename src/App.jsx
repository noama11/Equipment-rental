import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Products from './component/Products'
import Reference from './component/Reference'
import Testimonials from './component/Testimonials'
import { BrowserRouter, Routes, Route, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Collections from './component/Collections'
import Slider from './component/Slider'
import { products } from './data'
import Product from './component/Product'
import CategoryNav from './component/CategoryNav'
import ProductNew from './component/ProductNew'
import ProductsNew from './component/ProductsNew'
import ProductDetails from './component/ProductDetails'
import Contact from './component/Contact.jsx'
import StarsCanvas from './component/Stars.jsx'


function AppRoute() {
  return (
    <div className=''>
      <Navbar />

      <div id="home" className="bg-eventBack bg-no-repeat bg-cover">
        <Home />

      </div>

      <div className=" ">
        <span className='hash-span' id="products">
          &nbsp;
        </span>
        <Products />
      </div>

      <div className="">
        <span className='hash-span' id="reference">
          &nbsp;
        </span>
        <Reference />
      </div>

      <div className="">
        <span className='hash-span' id="allProducts">
          &nbsp;
        </span>
        <ProductsNew />
      </div>

      <div className="section ">
        <span className='hash-span' id="testimonials">
          &nbsp;
        </span>
        <Testimonials />
      </div>

      <div id="contact" className='relative z-0 bg-black'>
        <Contact />
        <StarsCanvas />
      </div>


    </div>
  )
}

function App() {



  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoute />} />
        <Route path="/products" element={<ProductsNew />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

      {/* <Navbar />
      <div id="home" className="">
        <Home />
      </div>

      <div id="products" className="pt-[200px] md:pt-[70px]">
        <Products />
      </div>

      <div id="reference" className="section">
        <Reference />
      </div>

      <div id='allProducts' className="section">
        <ProductsNew />
      </div>
      <div id="testimonials" className="section">
        <Testimonials />
      </div>

      <div id="contact" className='relative z-0 bg-black'>
        <Contact />
        <StarsCanvas />
      </div> */}



    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home toggle={toggle} />} />
    //     <Route path='/' element={<CategoryNav />} />
    //     {/* <div className='bg-dark'>
    //     <h1 className='text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]'>Latest Product</h1>
    //     <Slider data={products} />
    //   </div> */}
    //   </Routes>
    // </BrowserRouter>



    // <>
    //   <BrowserRouter>
    //     <div className='bg-dark'>
    //       <Navbar Navbar handleToggle={handleToggle} toggle={toggle} />
    //       <div className='block pb-[100px] pt-[100px]'>
    //         <Home />
    //       </div>
    //       <div className='block pb-[100px] pt-[100px]'>
    //         <ProductsNew />
    //       </div>
    //     </div>
    //   </BrowserRouter>
    // </>
  )
}

export default App


// <Navbar />
// <Home />
// <Services />
// <Products />
// <Reference />