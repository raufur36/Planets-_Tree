import React from 'react';

const NewPlants = ({ item }) => {
    const { name, price, region, image_url } = item;
    console.log(item)
    return (
        <div className='' >
            <div className='flex items-center p-3 gap-5 rounded bg-green-800 w-[600px] md:w-[480px] lg:w-[620px] mx-auto my-2 md:my-2 lg:my-2' >
                <div className='bg-amber-100 ' >
                    <img className='w-[200px] h-[200px]' src={image_url} alt="" />
                </div>
                <div className='text-white' >
                    <h1 className='font-semibold' > <span className='font-bold' >Name: </span>{name}</h1>
                    <h1 className='font-semibold' > <span>Region:</span> {region}</h1>
                    <h1 className='font-semibold' > <span>Price:</span> ${price}</h1>
                </div>
            </div>
        </div>
    );
};

export default NewPlants;