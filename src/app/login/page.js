import Link from "next/link";
import Google from "@/components/Shared/ProviderButton/Google";
import Facebook from "@/components/Shared/ProviderButton/Facebook";
import { signIn } from "../api/auth";




const page = async () => {



    const userData = async (formData) => {
        'use server'
        const rawFormData = {
            username: formData.get('username'),
            password: formData.get('password'),
        }

        const {username, password} = rawFormData;
        

        await signIn('credentials', {
            username: username,
            password: password,
            redirectTo: '/'
            
           
        })
        

        // When user hit the login button you can get user information in rawFormData object
       

     

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
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" name="username" placeholder="username" className="input input-bordered" required />
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
                            <Google/>
                        </div>
                        <div className="form-control ">
                            <Facebook/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;