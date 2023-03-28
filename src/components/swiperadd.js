import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from "swiper"
import Image from 'next/image';
import pic1 from '/public/pic1.png'
import pic2 from '/public/pic2.png'
import pic3 from '/public/pic3.png'
import pic4 from '/public/pic4.png'
import { Keyboard, Scrollbar, Navigation } from "swiper";
import Topitems from './topitems';


const Swiperadd = () => {
    return (
        <>
            <Swiper

                slidesPerView={3}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1025: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                }}

                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide className='mr-4'>
                    <Topitems></Topitems>
                    <div className="card drop-shadow-xl" >
                        <Image src={pic2} alt=''></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mr-4'>
                    <Topitems></Topitems>
                    <div className="card drop-shadow-xl" >
                        <Image src={pic3} alt=''></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mr-4'>
                    <Topitems></Topitems>
                    <div className="card drop-shadow-xl" >
                        <Image src={pic2} alt=''></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mr-4'>
                    <Topitems></Topitems>
                    <div className="card drop-shadow-xl" >
                        <Image src={pic2} alt=''></Image>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>



    );
};

export default Swiperadd;