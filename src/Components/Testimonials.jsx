import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from "swiper/modules"



const Testimonials = () => {
    return (
        <>
            <div className="container-fluid Testimonial py-5">
                <div className="container text-center">
                    <h1 className='main-heading text-center pb-5 pb-lg-0'>
                        <span>Client</span> Experiences

                    </h1>
                    {/* <p className='text-center main-p'>All our meals in one delicious snap </p> */}
                    <div className="container py-md-5 my-lg-5 Testimonial1">
                        <Swiper
                            // install Swiper modules
                            modules={[FreeMode, Pagination,]}
                            className='mySwiper'
                            spaceBetween={10}
                            slidesPerView={2}
                            freeMode={true}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            <SwiperSlide>
                                <div className="row " data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out">
                                    <div className="col-md-4">
                                        <div className="test_col1">
                                            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>John Smith</h3>
                                            <p>Recently dined at this restaurant and had an exceptional experience. The food was delicious, bursting with flavors that left me craving more. The cozy ambiance was perfect for a relaxed meal with friends or family.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row" data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out">
                                    <div className="col-md-4">
                                        <div className="test_col1">
                                            <img src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>Michael Lee
                                            </h3>
                                            <p>Dined at this restaurant last night and it exceeded expectations. The food was top-notch, beautifully presented, and tasted divine. Each dish showcased the chef's skill and creativity, impressing with every bite.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row" data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out">
                                    <div className="col-md-4">
                                        <div className="test_col1" >
                                            <img src="https://st4.depositphotos.com/2208684/20873/i/450/depositphotos_208734482-stock-photo-portrait-middle-aged-businessman-wearing.jpg" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>Emily Davis</h3>
                                            <p>Loved my dining experience at this restaurant! Greeted with warmth and hospitality upon arrival. Outstanding food with a variety of options catering to different tastes and dietary preferences.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="row " data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out" >
                                    <div className="col-md-4">
                                        <div className="test_col1" data-aos="fade-left" data-aos-duration="1300"
                                            data-aos-easing="ease-in-out">
                                            <img src="https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.jpg?s=612x612&w=0&k=20&c=GPniKSszzPgprveN7sCT5mb-_L3-RSlGAOAsmoDaafw=" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>David Thompson</h3>
                                            <p> Exceptional, fresh, and flavorful food. Great selection on the menu, everything cooked to perfection. Cozy and elegant ambiance for a memorable dining experience. Impressed by the hospitality from the moment we stepped in.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                    {/* ********* */}

                    <div className="container py-md-5 my-lg-5 Testimonial2">
                        <Swiper
                            // install Swiper modules
                            modules={[FreeMode, Pagination,]}
                            className='mySwiper'
                            spaceBetween={10}
                            slidesPerView={2}
                            freeMode={true}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            <SwiperSlide>
                                <div className="row " data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out">
                                    <div className="col-md-4">
                                        <div className="test_col1">
                                            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>John Smith</h3>
                                            <p>Recently dined at this restaurant and had an exceptional experience. The food was delicious, bursting with flavors that left me craving more. The cozy ambiance was perfect for a relaxed meal with friends or family.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row" data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out">
                                    <div className="col-md-4">
                                        <div className="test_col1">
                                            <img src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>Michael Lee
                                            </h3>
                                            <p>Dined at this restaurant last night and it exceeded expectations. The food was top-notch, beautifully presented, and tasted divine. Each dish showcased the chef's skill and creativity, impressing with every bite.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row" data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out">
                                    <div className="col-md-4">
                                        <div className="test_col1" >
                                            <img src="https://st4.depositphotos.com/2208684/20873/i/450/depositphotos_208734482-stock-photo-portrait-middle-aged-businessman-wearing.jpg" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>Emily Davis</h3>
                                            <p>Loved my dining experience at this restaurant! Greeted with warmth and hospitality upon arrival. Outstanding food with a variety of options catering to different tastes and dietary preferences.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="row " data-aos="fade-left" data-aos-duration="1300"
                                    data-aos-easing="ease-in-out" >
                                    <div className="col-md-4">
                                        <div className="test_col1" data-aos="fade-left" data-aos-duration="1300"
                                            data-aos-easing="ease-in-out">
                                            <img src="https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.jpg?s=612x612&w=0&k=20&c=GPniKSszzPgprveN7sCT5mb-_L3-RSlGAOAsmoDaafw=" alt="TopCollections" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="test_col2">
                                            <h3>David Thompson</h3>
                                            <p> Exceptional, fresh, and flavorful food. Great selection on the menu, everything cooked to perfection. Cozy and elegant ambiance for a memorable dining experience. Impressed by the hospitality from the moment we stepped in.</p>
                                            <span className="badge rounded-pill text-bg-secondary">Student</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Testimonials
