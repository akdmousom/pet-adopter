
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png"
import Header from "@/components/Home/Header/Header";
import UserDropdown from "./UserDropdown/UserDropDown";



const NavLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Pet-listing', path: '/pet-listing' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' },
];

const NavBar = async ({ children }) => {

   
  
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


                            <div className="flex-none text-center hidden lg:block">
                                <ul className="flex items-center gap-5">
                                    {/* Navbar menu content here */}
                                    {NavLinks.map((link) => {
                                        return (
                                            <li key={link.id}>
                                                <Link
                                                    href={link.path}
                                                    className= 'text-lg font-bold hover:border-b-4  duration-700  border-[#F04336] '
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                </ul>
                            </div>
                            <div className="flex gap-3 md:gap-5 items-center ">
                                <Link href="/adoptHerePage">
                                    <button className="md:text-lg  text-white rounded-full font-medium md:px-5 px-2 py-2 md:py-1 hover:bg-black bg-[#F04336]">Adopt Here</button>
                                </Link>
                                {/* <CgProfile onClick={showPopup} className="text-3xl text-[#F04336] cursor-pointer" /> */}
                            </div>


                            <div className="dropdown dropdown-end">
                               <UserDropdown/>
                            </div>                          
                        </div>
                    </div>
                    <div className="bg-[#FFF5E4]">
                        {children}
                    </div>


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
                                        className= 'text-lg font-bold hover:border-b-4  duration-700  border-[#F04336] '
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