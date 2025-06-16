import React from 'react';
import { Link, useNavigate } from 'react-router';

const NewPlants = ({ item }) => {
    const { plant_name, price, category, image_url,_id } = item;
    console.log(item)
    const navigate = useNavigate();
    const ViewPlants = (id) => {
        navigate(`/plantsdetails/${id}`)
    }
    return (
        <div className='' >
            <div className='flex items-center p-3 gap-5 rounded bg-green-800 w-[600px] md:w-[480px] lg:w-[620px] mx-auto my-2 md:my-2 lg:my-2' >
                <div className='bg-amber-100 ' >
                    <img className='w-[200px] h-[200px] rounded-2xl' src={image_url} alt="" />
                </div>
                <div className='text-white' >
                    <h1 className='font-semibold' > <span className='font-bold' >Name: </span>{plant_name}</h1>
                    <h1 className='font-semibold' > <span>Region:</span> {category}</h1>
                    <h1 className='font-semibold' > <span>Price:</span> ${price}</h1>
                    <button onClick={() => ViewPlants(_id)} className='bg-green-500 px-3 py-2 mt-3 rounded hover:bg-green-300' >View Details</button>
                </div>
            </div>
        </div>
    );
};

export default NewPlants;