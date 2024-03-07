
import Link from "next/link";

const ContactBanner = () => {
    return (
        <div>
            <div className="hero  relative w-full h-[350px] md:h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/1vkY5rK/contactbanner.png)'}}>
                <div className="absolute flex transform -translate-y-1/5 md:left-5 md:right-5 ">
                    <div className=" text-white ml-10 lg:ml-[103px] md:ml-[75px] space-y-7">
                        <h1 className="animate-bounce text-2xl font-bold lg:text-4xl md:text-3xl  bg-[#F04336] w-fit p-4 rounded-lg">Contact Us</h1>
                        <p className="text-xl font-semibold"><Link href={'/'} className="text-[#F04336] font-semibold">Home |</Link> Contact</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;