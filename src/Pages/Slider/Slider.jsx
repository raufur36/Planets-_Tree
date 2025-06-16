import React from 'react';
import "../../index.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import hanging_pothos from '../../assets/hanging-pothos-plant-gray.png';
import Lush_Green from '../../assets/Lush Green.png';
import Monster_Deliciosa_Plant from '../../assets/monstera-deliciosa-plant-pot.png';
import zz_plant_gray from '../../assets/zz-plant-gray-pot.png';


const Slider = () => {
    return (
        <div>
            <div className='flex justify-center gap-40 items-center mx-10' >
                <div className="flex-1 max-w-md">
                    <h1 className="mb-4 text-3xl text-green-800 font-bold">
                        Plant your Tree seeding anywhere across the globe
                    </h1>
                    <div className="border-b border-green-900 shadow-2xl"></div>
                    <div>
                        <div className='w-full h-[100px] overflow-hidden'>
                            <Swiper
                                modules={[A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                speed={500}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <div className="w-full h-full flex items-center justify-center "><h1 className='font-semibold text-gray-500 shadow indent-8 rounded' >Like the graceful fall of its vines, the hanging pothos reminds us that beauty often grows when we let life flow naturally.</h1></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-full h-full flex items-center justify-center "><h1 className='font-semibold text-gray-500 shadow indent-8 rounded' >Lush green whispers of nature's calm — a gentle reminder that life thrives in the quiet care of growth.</h1></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-full h-full flex items-center justify-center "><h1 className='font-semibold text-gray-500 shadow indent-8 rounded' >With every split leaf, the Monstera Deliciosa unveils nature’s art — bold, wild, and wonderfully imperfect.</h1></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-full h-full flex items-center justify-center "><h1 className='font-semibold text-gray-500 shadow indent-8 rounded' >Quietly resilient, the ZZ Plant Gray stands strong — thriving in stillness, shining in simplicity.</h1></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div >

                        <button className="bg-green-800 flex items-center gap-1 text-white py-2 mt-10 px-4 rounded mb-8 font-bold hover:bg-green-700">
                            <MdOutlineArrowOutward size={25} />
                            Get Started
                        </button>
                    </div>
                </div>
                <div className='w-[500px] overflow-hidden'>
                    <Swiper
                        modules={[Pagination, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        speed={500}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <SwiperSlide>
                            <div className="w-full h-full flex items-center justify-center "><img src={hanging_pothos} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-full flex items-center justify-center "><img src={Lush_Green} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-full flex items-center justify-center "><img src={Monster_Deliciosa_Plant} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-full flex items-center justify-center "><img src={zz_plant_gray} alt="" /></div>
                        </SwiperSlide>
                    </Swiper>
                </div>


            </div>
        </div>
    );
};

export default Slider;
