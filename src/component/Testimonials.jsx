
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { testimonials, testMainSentence } from '../data';
const title = "What people are saying about us";

const TestSlider = () => {
    return (

        <Swiper
            className='testimonialsSlider '
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={true}
        >
            {testimonials.map((testi, idx) => {
                return (
                    <SwiperSlide key={idx} className=''>
                        <div className='flex flex-col min-h-[250px] '>
                            <div className='flex flex-row-reverse items-center gap-x-5 mb-9'>
                                <img className='w-[60px]' src={testi.image} alt={testi.name} />
                                <div>
                                    <div className='text-xl font-semibold'>{testi.name}</div>
                                    <div className='text-gray-500'>{testi.occupation}</div>
                                </div>
                            </div>

                            <div className='text-xl max-w-[570px]  text-right'>
                                {testi.text}
                            </div>

                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

const Testimonials = () => {
    return (
        <section className="relative ">
            <div className="container mx-auto ">
                <div className="flex flex-col-reverse md:flex-row md:gap-x-10 gap-y-2">
                    {/* {image} */}
                    <div className="">
                        <img className='border rounded-lg shadow' src="public/event2.jpg" alt="image3" />
                    </div>
                    <div className="xl:max-w-[50%]  mb-4">
                        {/* {title} */}
                        <h2 className="text-3xl md:text-[40px] leading-tight font-semibold mb-4 flex justify-end ">{testMainSentence}</h2>
                        {/* {Slider} */}
                        <div className='  leading-tight'>
                            <TestSlider />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Testimonials;