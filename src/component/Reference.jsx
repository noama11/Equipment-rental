import { referenceTitle, referenceSubtitle, refTitles } from "../data";

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-one.svg";
import imageThree from "../assets/image-one.svg";
import imageLight from "../assets/lighting.jpg"
import imageRamkol from "/event2.jpg"
import imageGenerator from "../assets/generator.jpg"

import FadeIn from "./FadeIn";


const Reference = () => {
    return (
        <div id="reference" className=" px-10 py-12 md:py-16 max-w-[1490px] mx-auto">
            <FadeIn delay={0.2} direction="down">
                <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
                    {referenceTitle}
                </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="down">
                <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
                    {referenceSubtitle}
                </h5>
            </FadeIn>

            <div className="flex flex-col md:flex-row md:justify-center gap-8">

                <div >
                    <div className="relative flex flex-col gap-8 ">
                        <FadeIn delay={0.3} direction="down" className=" relative ">
                            <div className="relative">

                                <img src={imageLight} alt="" className="rounded-[40px] w-[650px] filter brightness-50" />
                                <h1 style={{ letterSpacing: '3px' }} className="absolute top-[40%] left-[30%] md:left-[35%] text-white font-semibold text-4xl md:text-5xl ">{refTitles[0]}</h1>
                            </div>

                        </FadeIn>
                        <FadeIn delay={0.5} direction="down" className="relative " >
                            <div className="relative">
                                <img src={imageRamkol} alt="" className="rounded-[40px]  w-[650px] filter brightness-50" />

                                <h1 style={{ letterSpacing: '3px' }} className="absolute top-[40%] left-[30%] md:left-[35%] text-white font-semibold text-4xl md:text-5xl ">{refTitles[1]}</h1>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <FadeIn delay={0.7} direction="up">
                    <div className="relative" >
                        <img src={imageGenerator} alt="" className="rounded-[40px] w-[650px] filter brightness-50" />

                        <h1 style={{ letterSpacing: '3px' }} className="absolute top-[40%] left-[30%] md:left-[35%] text-white font-semibold text-4xl md:text-5xl ">{refTitles[2]}</h1>
                    </div>
                </FadeIn>


            </div>
        </div>
    );
};

export default Reference;












{/* <FadeIn delay={0.2} direction="right">
                    <div className="relative flex flex-col gap-8">
                        <div className=" ">
                            <img src={imageOne} alt="" />
                            <h1 className=" text-white font-bold text-5xl ">{refTitles[0]}</h1>

                        </div>
                        <div className=" " >
                            <img src={imageOne} alt="" />

                            <h1 className=" text-white font-bold text-5xl ">{refTitles[1]}</h1>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2} direction="left">
                    <div className=" " >
                        <img src={imageOne} alt="" />

                        <h1 className=" text-white font-bold text-5xl ">{refTitles[2]}</h1>
                    </div>
                </FadeIn> */}