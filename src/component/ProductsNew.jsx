import { products, categoryProducts, categoryTitle, firstSentence, secondSentence } from "../data";
import FadeIn from "./FadeIn";
import ProductNew from "./ProductNew";
import { useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { HiPlus } from 'react-icons/hi'
import ProductDetails from "./ProductDetails";

const categories = ["cat-1", "cat-2", "cat-3"];
const pages = [1, 2, 3];

const Dropdown = () => {

    const [open, setOpen] = useState(false);
    const [cat, setCat] = useState("Categories");

    const handle = (cat) => {
        setCat(cat);
        setOpen(!open);
    }

    return (
        <div className="bg-[#242526]  top-[46px] w-[300px] translate-x-9 border rounded-lg shadow text-white p-3  overflow-hidden ">
            <div className="dropdown-item text-3xl">
                <button onClick={() => setOpen(!open)}>
                    {cat}
                </button>
            </div>

            <div className={open ? "" : "hidden"}>
                <div className="dropdown-item text-3xl cursor-pointer" onClick={() => handle(categories[0])}>
                    cat-1
                </div>
                <div className="dropdown-item text-3xl cursor-pointer" onClick={() => handle(categories[1])}>
                    cat-2
                </div>
            </div>
        </div>
    )
}

const ProductsNew = () => {
    const [toggle, setToggle] = useState(false);
    const [catIdx, setCatIdx] = useState(0);

    const [displayDetails, setDisplayDetails] = useState(false);

    const handleToggle = (id) => {
        setToggle(!toggle);
        setProductId(id);
    }

    const handleDetails = () => {
        setDisplayDetails(!displayDetails);
    }

    const detailsFunc = (id) => {
        setProductId(id);
        setDisplayDetails(!displayDetails);


    }

    // const DisplayProduct = () => {
    //     const controls = useAnimation();
    //     const product = products[productId];
    //     const description = ": These include incandescent, fluorescent, LED, and halogen bulbs that emit light in different ways, offering varying levels of brightness, color temperature, and energy efficiency."
    //     return (
    //         <div className="">
    //             <section className="relative pt-32 pb-12 lg:py-32 h-screen flex items-center bg-white">
    //                 <motion.div
    //                     animate={{
    //                         y: 0,
    //                         opacity: 1
    //                     }}
    //                     initial={{
    //                         y: -100, // Start off-screen, above the viewport
    //                         opacity: 0, // Start with opacity 0 for a fade-in effect
    //                     }}
    //                     transition={{
    //                         duration: 1.25,
    //                         type: "tween",
    //                         delay: 0.2,
    //                         ease: [0.25, 0.25, 0.25, 0.75],
    //                     }}
    //                     className="container mx-auto">
    //                     <div className="flex flex-col lg:flex-row items-center">
    //                         {/* Image: */}
    //                         <motion.div
    //                             animate={{
    //                                 y: 0,
    //                                 opacity: 1
    //                             }}
    //                             initial={{
    //                                 y: -100, // Start off-screen, above the viewport
    //                                 opacity: 0, // Start with opacity 0 for a fade-in effect
    //                             }}
    //                             transition={{
    //                                 duration: 1.25,
    //                                 type: "tween",
    //                                 delay: 0.2,
    //                                 ease: [0.25, 0.25, 0.25, 0.75],
    //                             }}
    //                             className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
    //                             <img className="max-w-[200px] lg:max-w-sm" src={product.img} alt="" />
    //                         </motion.div>
    //                         {/* Text: */}
    //                         <div className="flex-1 text-center lg:text-left">
    //                             <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">{product.title}</h1>
    //                             <div className="text-xl text-red-500 font-medium mb-6">{product.price}</div>
    //                             <p className="mb-8">{description}</p>
    //                         </div>

    //                     </div>

    //                 </motion.div>

    //                 <button onClick={() => setToggle(!toggle)}
    //                     className="absolute text-black text-2xl right-10 bottom-10 border p-2 rounded-md bg-gray-50 hover:scale-110 transition">
    //                     Back
    //                 </button>
    //             </section>
    //         </div>
    //     )
    // }


    const CatNav = () => {
        const [active, setActive] = useState('all')
        return (
            <div className="flex flex-row justify-center  text-black gap-4 md:justify-end md:gap-8 flex-wrap mb-8  ">
                <div className={`${catIdx !== 0 ? 'font-light hover:scale-110 text-xl' : 'font-semibold text-xl'}  transition cursor-pointer`} onClick={() => { setCatIdx(0) }}>{categoryTitle[0]}</div>
                <div className={`${catIdx !== 1 ? 'font-light hover:scale-110 text-xl' : 'font-semibold text-xl'}  transition cursor-pointer`} onClick={() => { setCatIdx(1) }}>{categoryTitle[1]}</div>
                <div className={`${catIdx !== 2 ? 'font-light hover:scale-110 text-xl' : 'font-semibold text-xl'}  transition cursor-pointer`} onClick={() => { setCatIdx(2) }}>{categoryTitle[2]}</div>

            </div>
        )
    }
    // subtitle: text-[18px] xl:text-[20px] leading-relaxed mb-5 lg:mb-9

    return (
        <section className="relative text-center py-12 md:py-16">
            <div className="container mx-auto ">
                <section className="py-16 bg-white">

                    <div className="relative container mx-auto ">
                        <div>
                            <FadeIn delay={0.2} direction="down" padding fullWidth>
                                <h2 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">{firstSentence}</h2>
                            </FadeIn>
                            <FadeIn delay={0.4} direction="down" padding fullWidth>
                                <p className="max-w-[639px] mx-auto text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center xl:mb-[70px]"> {secondSentence}</p>
                            </FadeIn>
                        </div>
                        <div className="flex justify-center md:justify-end md:mr-10">
                            <FadeIn delay={0.2} direction="up" >

                                <CatNav />
                            </FadeIn>
                        </div>

                        <div className="flex flex-col ">
                            <FadeIn delay={0.2} direction="up"  >

                                <Swiper
                                    modules={[Pagination, Navigation]}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    className="productSlider min-h-[600px]"
                                >
                                    {pages.map((cat, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
                                                    {categoryProducts[catIdx].map((product, idx) => {
                                                        return (
                                                            <ProductNew title={product.title} price={product.price} img={product.img} handleToggle={handleToggle} Id={idx} />
                                                        )
                                                    })}
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </FadeIn>
                        </div>


                    </div>
                </section>
            </div>

            {/* <div className={`${displayDetails ? "hidden" : ""} absolute container bottom-0 z-10 w-3/5 h-3/5 ml-[10%] mt-[20%] border-[#e8e8e8] border-solid border-[1px]  shdaow`} >
                <ProductDetails id={productId} />
            </div> */}





        </section>
    )
}

export default ProductsNew;