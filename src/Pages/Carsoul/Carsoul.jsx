import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { BsGift } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";

const Carsoul = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-green-950 items-center justify-center gap-4 py-10 px-10' >
                <div className='flex items-center justify-center gap-5 bg-white rounded px-4 py-12' >
                    <div>
                        <TbTruckDelivery size={28} />
                    </div>
                    <div>
                        <h1 className=' font-bold' >Free Shipping</h1>
                        <p className='text-xs text-gray-500' >Enjoy Hassle-free delivery with our free service.</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-5 bg-green-700 rounded px-4 py-12' >
                    <div>
                        <BsGift color='white' size={28} />
                    </div>
                    <div>
                        <h1 className=' font-bold text-white' >Special Gift Card</h1>
                        <p className='text-xs text-gray-200' >Special Gift Card offers can distract readers.</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-5 bg-white rounded px-4 py-12' >
                    <div>
                        <TbTruckReturn size={28} />
                    </div>
                    <div>
                        <h1 className=' font-bold' >Return & Echange</h1>
                        <p className='text-xs text-gray-500' >Content can divert attension from retrun & Exchange policies.</p>
                    </div>
                </div>


            </div>
            <div className='text-center my-10' >
                <h1 className='text-3xl text-green-800 font-bold ' >Take A look of Our new Plants</h1>

            </div>
        </div>
    );
};

export default Carsoul;