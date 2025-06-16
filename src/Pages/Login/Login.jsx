import React, { use } from 'react';
import AuthContext from '../../Context/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";


const Login = () => {
    const { signIn, user, LoginWithGoogle, LoginWithGitHub } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(user)
    const HandelLoginUser = (e) => {
        e.preventDefault();
        const Form = e.target;
        const formData = new FormData(Form);
        const userInfo = Object.fromEntries(formData.entries());
        const { email, password } = userInfo;
        console.log(email, password)


        if (email) {
            signIn(email, password)
                .then(res => {
                    if (res) {
                       navigate(`${location.state ? location.state : '/'}`);
                    }
                })
                .catch(error => console.log(error))
        }



    }
    const HandelGooglePopUp = (e) => {
        e.preventDefault();
        LoginWithGoogle()
            .then(res => {
                if(res){
                    navigate(`${location.state ? location.state : '/'}`);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const HandelGitHubPopUp = () => {
        LoginWithGitHub()
            .then(res => {
                if(res){
                    navigate(`${location.state ? location.state : '/'}`);
                }
            })
            .catch(error => {
                error
            });
    }
    return (
        <div>
            <div className='text-center mt-30 mb-10' >
                <h1 className='text-2xl font-bold' >Register A New Account</h1>
            </div>
            <div className='grid items-center justify-center mb-40' >
                <form onSubmit={HandelLoginUser} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <div className='flex items-center justify-center gap-3 bg-white border-2
                     border-gray-200 shadow hover:border-none hover:bg-gray-300 py-2 rounded' >
                        <FcGoogle size={28} />
                        <button onClick={HandelGooglePopUp} >Google Login</button>
                    </div>
                    <div className='flex items-center justify-center gap-3  bg-white border-2
                     border-gray-200 shadow hover:bg-gray-300 py-2 hover:border-none rounded' >
                        <SiGithub size={28} />
                        <button onClick={HandelGitHubPopUp} >GitHub</button>
                    </div>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;