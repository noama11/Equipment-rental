import FadeIn from "./FadeIn"
import { heroSubtitle, heroTitle, products, heroButton, stats } from "../data";
import searchIcon from "../assets/search-icon.svg";
import Services from "./Services";
import Products from "./Products";
import CategoryNav from "./CategoryNav";
import Slider from "./Slider";
import Collections from "./Collections";
import CatNavMobile from "./CatNavMobile";
import { useState } from 'react'
import CountUp from 'react-countup';
import ProductsNew from "./ProductsNew"
import { useNavigate } from "react-router-dom";
import Reference from "./Reference";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";


const Stats = () => {
    return (
        <div className="bg-[#472c4c] rounded-[20px] p-12 text-white ">
            <div className="flex flex-wrap gap-y-8">
                {stats.map((stat, idx) => {
                    return (
                        <div key={idx}
                            className=" min-h-[70px] w-3/6 flex flex-col
                         justify-center items-center odd:border-r lg:flex-1 lg:border-r lg:last:border-none">
                            <div className="text-2xl font-semibold lg:text-4xl">
                                <CountUp start={0} end={stat.value} duration={2.75} />
                                +
                            </div>
                            <div className="text-base font-light max-w-[110px] mx-auto lg:text-xl">{stat.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}


const Home = ({ toggle }) => {

    return (
        <>
            <div id="home" className=" ">
                <section className="relative w-full h-screen mx-auto py-10 md:py-16 bg-black/70">
                    <div className="container mx-auto text-center">


                        <FadeIn delay={0.2} direction="down" padding fullWidth>
                            <h1 className="mt-[90px] text-center text-5xl font-semibold leading-tight xs:text-[80px] text-white max-w-[1050px]">
                                {heroTitle}
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="down" padding fullWidth>
                            <h5 className="mt-6 text-center  text-lg xs:text-3xl text-white max-w-[500px]">
                                {heroSubtitle}
                            </h5>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="up" padding fullWidth>
                            <a href="#contact" className="relative w-full xs:w-[200px] mt-11 text-white text-2xl flex justify-center rounded-md bg-[rgba(255,255,255,0.4)]  cursor-pointer hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] backdrop:blur-md
                    transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]"
                            >
                                {heroButton}
                            </a>
                        </FadeIn>

                        {/* <FadeIn delay={0.2} direction="up" >
                        <Stats />
                    </FadeIn> */}

                        {/* <div className="absolute h-[60px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" /> */}
                        <div className="relative mt-10  z-20">
                            <Stats />
                        </div>

                    </div>



                    <div className="absolute z-10  h-[60px] md:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />


                </section>




            </div>
        </>
    )
};

export default Home

