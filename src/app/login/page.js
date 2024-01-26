'use client'
import { signIn } from "next-auth/react";
import Link from "next/link";
import googleIcon from '../../../public/images/google.svg'
import facebookIcon from '../../../public/images/facebook.svg'
import Image from 'next/image'
const page = () => {

    const userData = async (formData) => {
        // 'use server'
        const rawFormData = {
            userEmail: formData.get('email'),
            userPassword: formData.get('password'),
        }

        // When user hit the login button you can get user information in rawFormData object
        await rawFormData
        console.log(rawFormData);

    }

    return (
        <div className="hero max-w-[1366px] min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login to your dashboard. Here you can get all functionality for adopting any pets</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form action={userData} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <p className="text-sm text-center">Don&#39;t have account <span className="text-[#f04336] font-bold"><Link href={'/register'}>Register</Link></span></p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#f04336] text-white  hover:bg-black">Login</button>
                        </div>
                        <hr/>
                        <p className="text-center">OR</p>
                        <hr/>
                        <div className="form-control ">
                            <button  type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={googleIcon} alt='google icon' width={30} /> Login With Google</button>
                        </div>
                        <div className="form-control ">
                            <button  type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={facebookIcon} alt='facebook icon' width={30} /> Login With Facebook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;