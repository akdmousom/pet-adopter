import Image from "next/image";
import logo from '../../../../public/footerLogo.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const navStyle = {
        fontSize: '12px',
    };
    return (
        <div>
            <footer className="footer  px-4 py-10 md:px-10 bg-[#FFF5E4] dark:bg-[#121212] text-base-content dark:text-white">
                <aside className="text-center">
                    <Image src={logo} height={120} width={120} alt="Footer logo" className="mx-auto" />
                    <p className="text-sm md:text-base"> Pet Adopter Limitied<br />Facilitating pet adoptions with trust and dedication since 1992.</p>
                </aside>
                <nav>
                    <header className="footer-title text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Resources</header>
                    <Link href='/about' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">About Us</Link>
                    <Link href='/contact' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">Contact Us</Link>
                    <Link href='/shop' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">Shop</Link>
                    <Link href='/adoptHerePage' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">Adopt Pet</Link>
                </nav>
                <nav>
                    <header className="footer-title text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Company</header>
                    <Link href='/login' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">Login</Link>
                    <Link href='/register' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">Register</Link>
                    <Link href='/pet-listing' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">Pet Listing</Link>
                    <Link href='/' style={navStyle} className=" cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]">Home</Link>

                </nav>
                <nav>
                    <header className="footer-title text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Follow Us</header>
                    <a style={navStyle} className=" flex gap-2 items-center cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]"><FaInstagram className="text-xl" /> Instagram </a>
                    <a style={navStyle} className="flex gap-2 items-center cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]"><FaTwitter className="text-xl" />Twitter</a>
                    <a style={navStyle} className="flex gap-2 items-center cursor-pointer hover:border-b-2 text-lg font-semibold dark:text-white hover:border-[#F04336] dark:border-[#68e0cf]"><FaFacebook className="text-xl" />Facebook</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;