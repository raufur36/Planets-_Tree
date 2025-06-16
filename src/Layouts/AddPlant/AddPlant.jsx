import React from 'react';

const AddPlant = () => {
    const HandleAddPlant = (e) => {
        e.preventDefault();
        const form = e.target;
        const formInfo = new FormData(form);
        const PlantsInformation = formEnt
    }
    return (
        <div>
            <div className='flex items-center justify-center my-20' >
                <form onSubmit={HandleAddPlant} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h1 className="">Add Plants</h1>

                    <label className="label">Title</label>
                    <input type="text" className="input" placeholder="My awesome page" />

                    <label className="label">Slug</label>
                    <input type="text" className="input" placeholder="my-awesome-page" />

                    <label className="label">Author</label>
                    <input type="text" className="input" placeholder="Name" />
                </form>
            </div>
        </div>
    );
};

export default AddPlant;