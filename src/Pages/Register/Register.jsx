import React, { use } from 'react';
import AuthContext from '../../Context/AuthContext';
import { useNavigate } from 'react-router';

const Register = () => {
    const { Register } = use(AuthContext);
    const navigate = useNavigate();
   
    const HandelRegsiterForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userCreated } = Object.fromEntries(formData.entries());
        if (email) {
            Register(email, password)
                .then(res => {
                    const userInfo = {
                        ...userCreated,
                        email

                    }
                    if (res.user) {
                        fetch('http://localhost:3000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                navigate('/')
                                console.log(data);  // log the response from server
                            })
                            .catch(error => {
                                console.log(error);  // catch any error
                            });

                    }
                })

        }


    }

    return (
        <div>
            <div className='text-center mt-30 mb-10' >
                <h1 className='text-2xl font-bold' >Register A New Account</h1>
            </div>
            <div className='grid items-center justify-center mb-40' >
                <form onSubmit={HandelRegsiterForm} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Name</label>
                    <input type="Name" className="input" name='name' placeholder="full name" />

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Photo URL</label>
                    <input type="url" name='photo' className="input" placeholder="photo url" />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;