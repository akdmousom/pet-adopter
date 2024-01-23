import Layout from '@/components/Layouts/Login/Layout';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="hero max-w-[1366px] min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Register to your account from here. You can adopt any kind of pets from here</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className='mt-4'>
                            <p className="text-sm text-center ">Already have an account <span className='text-[#f04336] font-bold'><Link href={'/login'}>Login</Link></span></p>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#f04336] text-white hover:bg-black">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;