
"use client"
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import logo from "../../../../public/logo.png"
import { usePathname } from "next/navigation";
import Header from "@/components/Home/Header/Header";
import { useState } from "react";

const NavLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Pet-listing', path: '/pet-listing' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' },
];

const NavBar = ({ children }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const pathname = usePathname();

    const isActive = (path) => pathname === path;
    const showPopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const hidePopup = () => {
        // setPopupVisible(!isPopupVisible);
    };
    return (
        <div>
            <Header />
            <div className="drawer z-10 bg-[#ffe3e1] text-black shadow-md ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-evenly flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex justify-evenly w-full  ">
                            <Image src={logo} alt="logo" className=" h-10 w-24 md:h-24 md:w-52 object-cover" />


                            <div className="flex-none   text-center hidden md:block">
                                <ul className="flex items-center gap-5">
                                    {/* Navbar menu content here */}
                                    {NavLinks.map((link) => {
                                        return (
                                            <li key={link.id}>
                                                <Link
                                                    href={link.path}
                                                    className={isActive(link.path) ? ' bg-[#F04336] text-lg px-3 py-2 rounded-lg  font-bold text-white mx-2' : 'text-lg font-bold hover:border-b-4  duration-700  border-[#F04336] '}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                </ul>
                            </div>
                            <div className="flex gap-3 md:gap-5 items-center ">
                                <button className=" md:text-lg text-white rounded-full font-medium px-5 py-2 bg-[#F04336]">Adopt Here</button>
                                <CgProfile onClick={showPopup} className="text-3xl text-[#F04336]" />
                            </div>
                            {isPopupVisible && (
                                <div className={`absolute mt-[170px] right-10 duration-500 md:right-40 md:mt-[170px] z-30 bg-white border rounded shadow-md transition-all overflow-hidden ${isPopupVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
                                    <div className="bg-white p-4 rounded-md" >

                                        <p>Sign in / Sign up</p>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* <div className="bg-[#FFF5E4]">
                        {children}
                    </div> */}
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className=" menu p-4 w-80 min-h-full bg-[#FFF5E4] ">
                        {/* Sidebar content here */}
                        {NavLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <Link
                                        href={link.path}
                                        className={isActive(link.path) ? ' bg-[#F04336] text-lg px-3 py-2 rounded-lg  font-bold text-white mx-2' : 'text-lg font-bold'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;