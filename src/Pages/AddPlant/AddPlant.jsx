import React from 'react';

const AddPlant = () => {
    const HandleAddPlant = (e) => {
        e.preventDefault();
        const form = e.target;
        const formInfo = new FormData(form);
        const PlantsInformation = Object.fromEntries(formInfo.entries());
        console.log(PlantsInformation);
    }
    return (
        <div>
            <div className='flex items-center justify-center my-20' >
                <form onSubmit={HandleAddPlant} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h1 className="">Add Plants</h1>

                    <label className="label">Photo URL</label>
                    <input name='image_url' type="url" className="input" placeholder="photo url" />

                    <label className="label">Plant Name</label>
                    <input type="text" name='plant_name' className="input" placeholder="plant name" />

                    <label className="label">Category</label>
                    <input type="text" name='category' className="input" placeholder="category" />
                   
                    <label className="label">Care Level</label>
                    <input type="text" name='level' className="input" placeholder="level" />
                    
                    <label className="label">Watering Frequency</label>
                    <input type="text" name='watering_frequency' className="input" placeholder="Watering" />
                    
                    <label className="label">Last Watered Date</label>
                    <input type="date" name='last_date' className="input" placeholder="Watering_last" />
                    
                    <label className="label">Next Watered Date</label>
                    <input type="date" name='next_date' className="input" placeholder="Watering_next" />
                    
                    <label className="label">Health</label>
                    <input type="text" name='Health' className="input" placeholder="health" />
                    
                    <label className="label">Email</label>
                    <input type="text" name='email' className="input" placeholder="email" />
                    
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="name" />
                    
                    <label className="label">Description</label>
                    <input  name='category' className="textarea" placeholder="category" />
                
                
                     <input className='bg-black text-white px-4 py-2 rounded ' type="submit" value="Add Plant" />
                
                </form>
            </div>
        </div>
    );
};

export default AddPlant;