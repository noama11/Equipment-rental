import { referenceTitle, referenceSubtitle, refTitles } from "../data";

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-one.svg";
import imageThree from "../assets/image-one.svg";
import imageLight from "../assets/lighting.jpg"
import imageRamkol from "../assets/ramkols.jpg"
import imageGenerator from "../assets/generator.jpg"
import FadeIn from "./FadeIn";


const Reference = () => {
    return (
        <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
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
                <FadeIn delay={0.2} direction="right">
                    <div className="relative flex flex-col gap-8">
                        <div className="bg-cover bg-center rounded-[20px] shadow-md " style={{ backgroundImage: `url(${imageLight})` }}>
                            <div className="relative rounded-[20px] shadow-md  flex flex-col items-center justify-center w-[735px] h-[549px] bg-black/60"

                            >
                                {/* <img src={imageLight} alt="" className="rounded-[20px] shadow-md w-[550px]" /> */}
                                <h1 className=" text-white font-bold text-5xl ">{refTitles[0]}</h1>
                            </div>
                        </div>
                        <div className="bg-cover bg-center rounded-[20px] shadow-md " style={{ backgroundImage: `url(${imageGenerator})` }}>
                            <div className="relative rounded-[20px] shadow-md  flex flex-col items-center justify-center w-[735px] h-[549px] bg-black/60"

                            >
                                {/* <img src={imageLight} alt="" className="rounded-[20px] shadow-md w-[550px]" /> */}
                                <h1 className=" text-white font-bold text-5xl ">{refTitles[1]}</h1>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2} direction="left">
                    <div className="bg-cover bg-center rounded-[20px] shadow-md " style={{ backgroundImage: `url(${imageRamkol})` }}>
                        <div className="relative rounded-[20px] shadow-md  flex flex-col items-center justify-center w-[735px] h-[549px] bg-black/60"

                        >
                            {/* <img src={imageLight} alt="" className="rounded-[20px] shadow-md w-[550px]" /> */}
                            <h1 className=" text-white font-bold text-5xl ">{refTitles[2]}</h1>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Reference;