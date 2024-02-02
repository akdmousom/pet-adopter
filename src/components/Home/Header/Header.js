import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
    return (
        <div className=" text-center md:flex items-center justify-between px-5 md:px-16 py-2 bg-[#0A303A] text-white">
            <div className="">
                <p className=" text-sm md:text-base">Call us: 747-800-9880  Opening Hours: 7:00 am - 9:00 pm (Mon - Sun)</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <p>Follow :</p>
                <div className="flex gap-5 items-center">
                    <FaFacebook className="hover:text-lg transform hover:scale-110 transition-transform duration-300" />
                    <FaTwitter className="hover:text-lg transform hover:scale-110 transition-transform duration-300" />
                    <FaInstagram className="hover:text-lg transform hover:scale-110 transition-transform duration-300" />
                </div>
            </div>

        </div>
    );
};

export default Header;