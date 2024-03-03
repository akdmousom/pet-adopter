import Link from 'next/link';
import React from 'react';
import googleIcon from '../../../../public/images/google.svg'
import facebookIcon from '../../../../public/images/facebook.svg'
import Image from 'next/image'
import { POST } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const image_key = "a09d000658ca4fa5a3ce2dd2cac0530a";
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const page = () => {

    const userData = async (formData) => {

        'use server'
        const rawFormData = {
            fullName: formData.get('userName'),
            userEmail: formData.get('userEmail'),
            userAvater: formData.get('userAvater'),
            userPassword: formData.get('userPassword'),
        }

        // const image_file = rawFormData.userAvater;
        const formDataSend = new FormData();
        formDataSend.append("key", image_key);
        formDataSend.append("image", rawFormData.userAvater);

        const response = await fetch(image_api, {
            method: 'POST',
            body: formDataSend,
        })

        const data = await response.json();
        // console.log(data);
        
        const regData = {
            userName: rawFormData.fullName,
            userEmail: rawFormData.userEmail,
            userAvater: data.data.url,
            userPassword: rawFormData.userPassword,
        }
        // console.log(regData);


        // When user hit the login button you can get user information in rawFormData object
        await regData
        const res = await fetch(`https://pet-adopter-backend.vercel.app/api/v1/userregistration`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(regData),
        })

        if (res.ok) {

            redirect('/')

        }
    }




    return (
        <div className="hero max-w-full min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Register to your account from here. You can adopt any kind of pets from here</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form action={userData} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="Full Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='userEmail' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" name='userAvater' placeholder="Image URL" className="input input-bordered pt-2" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='userPassword' placeholder="Password" className="input input-bordered" required />

                        </div>

                        <div className='mt-4'>
                            <p className="text-sm text-center ">Already have an account? <span className='text-[#f04336] font-bold'><Link href={'/login'}>Login</Link></span></p>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-[#f04336] text-white hover:bg-black">Register</button>
                        </div>
                        <hr />
                        <p className="text-center">OR</p>
                        <hr />
                        <div className="form-control ">
                            <button type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={googleIcon} alt='google icon' width={30} /> Login With Google</button>
                        </div>
                        <div className="form-control ">
                            <button type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={facebookIcon} alt='facebook icon' width={30} /> Login With Facebook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;