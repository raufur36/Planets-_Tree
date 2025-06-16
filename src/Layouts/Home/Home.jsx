import React from 'react';
import Slider from '../../Pages/Slider/Slider';
import Carsoul from '../../Pages/Carsoul/Carsoul';
import NewPlants from '../../Pages/NewPlants/NewPlants';
import plant from '../../Components/Api/Plants.json'
const Home = () => {
    const { plants } = plant;
    return (
        <div>
            <Slider></Slider>
            <Carsoul></Carsoul>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 ' >
                {
                    plants.map(item => <NewPlants key={item.id} item={item} ></NewPlants>)
                }
            </div>
        </div>
    );
};

export default Home;