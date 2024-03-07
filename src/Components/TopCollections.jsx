import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import img from "../assets/collection1.png"
import img1 from "../assets/collection1.png"
import img3 from "../assets/foofie1.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"

import { FreeMode, Pagination } from "swiper/modules"
const TopCollections = () => {
    return (
        <>
            <div className="container-fluid TopCollections py-3 py-lg-5">
                <div className="container text-center">
                    <h1 className='main-heading text-center'>
                        <span>Top</span> Collections

                    </h1>
                    <p className='text-center main-p'>Indulge in Every Dish with Just One Click!</p>
                    <div className="container py-md-5 Collections1">
                        <Swiper
                            // install Swiper modules
                            modules={[FreeMode, Pagination,]}
                            className='mySwiper'
                            spaceBetween={20}
                            slidesPerView={3}
                            freeMode={true}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            <SwiperSlide><img src={img4} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img1} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img3} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img5} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img6} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img7} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            ...
                        </Swiper>
                    </div>

                    {/* ********* */}

                    <div className="container py-md-5 Collections2">
                        <Swiper
                            // install Swiper modules
                            modules={[FreeMode, Pagination,]}
                            className='mySwiper'
                            spaceBetween={20}
                            slidesPerView={1}
                            freeMode={true}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            <SwiperSlide><img src={img4} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img1} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img3} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img5} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img6} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            <SwiperSlide><img src={img7} alt="TopCollections" className='img-fluid' /></SwiperSlide>
                            ...
                        </Swiper>
                    </div>

                </div>
            </div>


        </>
    )
}

export default TopCollections
