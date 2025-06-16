import React from 'react';
import Slider from '../../Pages/Slider/Slider';
import Carsoul from '../../Pages/Carsoul/Carsoul';
import NewPlants from '../../Pages/NewPlants/NewPlants';

import { useLoaderData } from 'react-router';
const Home = () => {
    const PlantsData = useLoaderData();
    
    return (
        <div>
            <Slider></Slider>
            <Carsoul></Carsoul>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 ' >
                {
                    PlantsData.map(item => <NewPlants key={item.id} item={item} ></NewPlants>)
                }
            </div>
        </div>
    );
};

export default Home;