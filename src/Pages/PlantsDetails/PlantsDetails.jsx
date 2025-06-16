import React from 'react';
import { useLoaderData } from 'react-router';

const PlantsDetails = () => {
    const plants = useLoaderData();
    console.log(plants)
    return (
        <div>
            this is plants
        </div>
    );
};

export default PlantsDetails;