import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Product from './Product';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'

const Slider = ({ data }) => {
    return (
        <Swiper modules={[Pagination, Navigation]} loop={true} navigation={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 30
                },
            }}


            className='mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
        >
            <>
                {
                    data.map((product) => {
                        return (
                            <SwiperSlide>
                                <Product title={product.title} price={product.price} img={product.img} />
                            </SwiperSlide>
                        )
                    })
                }

                {/* <SwiperSlide>slide1</SwiperSlide>
                <SwiperSlide>slide2</SwiperSlide>
                <SwiperSlide>slide3</SwiperSlide> */}
                <div className='swiper-pagination'></div>
            </>
        </Swiper>
    )
}

export default Slider;