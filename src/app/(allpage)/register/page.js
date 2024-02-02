import Link from 'next/link';
import React from 'react';
import googleIcon from '../../../../public/images/google.svg'
import facebookIcon from '../../../../public/images/facebook.svg'
import Image from 'next/image'
import { redirect } from 'next/navigation';

const page = () => {

    const userData = async (formData) => {
        'use server'
        const rawFormData = {
            fullName: formData.get('userName'),
            userEmail: formData.get('userEmail'),
            userAvater: formData.get('userAvater'),
            userPassword: formData.get('userPassword'),
        }
        // Send post request for new user
        
        const res = await fetch('https://pet-adopter-backend.vercel.app/api/v1/userregistration', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),


        })

        const data = await res.json()

        if (data.acknowledged === true) {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            redirect('/login')
            
        }

    }



    return (
        <div className="hero max-w-[1366px] min-h-screen bg-base-200">
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
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='userAvater' placeholder="Image URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='userPassword' placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className='mt-4'>
                            <p className="text-sm text-center ">Already have an account <span className='text-[#f04336] font-bold'><Link href={'/api/auth/signin'}>Login</Link></span></p>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-[#f04336] text-white hover:bg-black">Register</button>
                        </div>
                        <hr/>
                        <p className="text-center">OR</p>
                        <hr/>
                        <div className="form-control ">
                            <button  type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={googleIcon} alt='google icon' width={30} /> Login With Google</button>
                        </div>
                        <div className="form-control ">
                            <button  type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={facebookIcon} alt='facebook icon' width={30}  /> Login With Facebook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;