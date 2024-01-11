// local imports
import { productsTitle, productsBtnText, products, productsBest } from "../data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";
import FadeIn from "./FadeIn";
import { Link, useNavigate } from "react-router-dom";
import ProductNew from "./ProductNew";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../slider.css'
import { Swiper, SwiperSlide } from "swiper/react";

// The the div of the products is written twice, one for the desktop screen and the second for the iphone screen.

const SliderProducts = (classProps) => {
    return (

        <div className={classProps}>
            <Swiper
                grabCursor={true}
                breakpoints={{
                    550: {
                        slidesPerView: 2,
                        spaceBetween: 18,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {
                    productsBest.map((product, i) => (
                        <SwiperSlide className="max-w-[265px]">
                            <div>

                                <ProductNew title={product.title} price={product.price} img={product.img} Id={i} />
                            </div>
                        </SwiperSlide>

                    ))}
            </Swiper>
        </div>
    )
}

const Products = () => {
    return (
        <div
            id="products"
            className="flex flex-col gap-[128px] 2xl:gap-2  mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px]
          mx-auto px-10 w-full "
        >
            {/* <div className="hidden md:flex mx-auto md:flex-row gap-[160px] md:gap-6">
                {
                    productsBest.map((product, i) => (

                        <FadeIn key={i} delay={(i + 1) * 0.2} direction="right" >
                            <ProductNew title={product.title} price={product.price} img={product.img} Id={i} />
                        </FadeIn>

                    ))}

            </div> */}
            {/* <SliderProducts classProps={"hidden "} /> */}

            <div className="">
                <FadeIn delay={0.2} direction="left">
                    <div className="flex flex-col">
                        <h1 className="text-center  text-fontBlack text-5xl lg:text-[64px] font-medium mb-6">
                            {productsTitle}
                        </h1>

                        <Link
                            to={"/products"}
                            className="flex items-center justify-center  bg-transparent mb-8 text-fontBlack "
                        >
                            {/* <img className="scale-x-[-1]" src={arrowIcon} alt="" /> */}
                            <h5 className="text-lg lg:text-xl text-[#4F4F4F] font-medium  border-transparent py-2 px-4 rounded-lg  border hover:border-black outline-none focus:outline-none ease-linear transition-all duration-350 mx-auto">
                                {productsBtnText}
                            </h5>

                        </Link>

                    </div>
                </FadeIn>
            </div>

            {/* <div className="md:hidden w-full flex flex-col md:flex-row gap-[80px] ">
                {
                    productsBest.map((product, i) => (

                        <FadeIn key={i} delay={(i + 1) * 0.2} direction="left" >
                            <ProductNew title={product.title} price={product.price} img={product.img} Id={i} />
                        </FadeIn>
                    ))}

            </div> */}

            <SliderProducts classProps={" w-full flex flex-col md:flex-row gap-[80px] "} />




        </div>
    );
};

export default Products;