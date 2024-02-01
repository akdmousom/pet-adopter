import Image from "next/image";
import logo from '../../../../public/footerLogo.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const navStyle = {
        color: 'black',
        fontSize: '12px',

    };
    return (
        <div>
            <footer className="footer px-4 py-10 md:px-10 bg-[#ffe3e1] text-base-content">
                <aside className="text-center ">
                    <Image src={logo} height={120} width={120} alt="Footer logo" className="mx-auto" />
                    <p className="text-sm md:text-base"> Pet Adopter Limitied<br />Facilitating pet adoptions with trust and dedication since 1992.</p>
                </aside>
                <nav>
                    <header className="footer-title text-[#F04336]">ABOUT US</header>
                    <a style={navStyle} className=" cursor-pointer hover:border-b-2 hover:border-[#F04336]">Volunteer</a>
                    <a style={navStyle} className=" cursor-pointer hover:border-b-2 hover:border-[#F04336]">FAQ</a>
                    <a style={navStyle} className=" cursor-pointer hover:border-b-2 hover:border-[#F04336]">Financials</a>
                    <a style={navStyle} className=" cursor-pointer hover:border-b-2 hover:border-[#F04336]">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#F04336]">Company</header>
                    <Link href='/about' style={navStyle} className=" cursor-pointer hover:border-b-2 hover:border-[#F04336]">About us</Link>
                    <Link href='/contact' style={navStyle} className=" cursor-pointer hover:border-b-2 hover:border-[#F04336]">Contact</Link>

                </nav>
                <nav>
                    <header className="footer-title text-[#F04336]">FOLLOW US</header>
                    <a style={navStyle} className=" flex gap-2 font-semibold items-center cursor-pointer hover:border-b-2 hover:border-[#F04336]"><FaInstagram className="text-xl" /> Instagram </a>
                    <a style={navStyle} className="flex gap-2 font-semibold items-center cursor-pointer hover:border-b-2 hover:border-[#F04336]"><FaTwitter className="text-xl" />Twitter</a>
                    <a style={navStyle} className="flex gap-2 font-semibold items-center cursor-pointer hover:border-b-2 hover:border-[#F04336]"><FaFacebook className="text-xl" />Facebook</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;