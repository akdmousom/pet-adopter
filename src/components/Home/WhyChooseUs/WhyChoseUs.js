import Image from "next/image";
import Statistics from "../Statistics/Statistics";

const WhyChoseUs = () => {

    return (
        <>
            <div className="bg-[#FFF5E4] max-w-[1366px] mx-auto">
                <Statistics />
                <div className="bg-[#ffe3e1] grid mx-auto my-8">
                    <div className="text-black p-8">

                        <h3 className="text-4xl lg:text-5xl text-center font-bold py-8">Why Choose Us?</h3>

                        <div className="grid lg:grid-cols-4 gap-6 items-center justify-center my-4">
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/Pw1vByK/pet-24service.jpg" alt="Pet-24/7 Service" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[200px] h-[200px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] mt-4 font-bold">24/7 Service</h3>
                                <p className="text-black mt-2 text-center">Unwavering support, anytime, anywhere. Our 24/7 service ensures a smooth adoption journey with assistance available around the clock</p>
                            </div>
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/BwxjKqf/pet-doctor.jpg" alt="pet-doctor" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[200px] h-[200px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] mt-4 font-bold">Experienced Staff</h3>
                                <p className="text-black mt-2 text-center">Adopt with tailored guidance. Our In-Home Consultants bring personalized advice to your doorstep, ensuring the perfect match for your unique lifestyle.</p>
                            </div>
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/QQJ5kgJ/pet-2.jpg" alt="pet-2" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[200px] h-[200px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] mt-4 font-bold">In-Home Consult</h3>
                                <p className="text-black mt-2 text-center">Expertly guided adoptions. Our Pro Staff is committed to making your adoption experience enjoyable, providing knowledgeable assistance at every turn.</p>
                            </div>
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/KKFgFF3/pet-3.jpg" alt="pet-3" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[200px] h-[200px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] mt-4 font-bold">PetPal Connect</h3>
                                <p className="text-black mt-2 text-center">Where hearts and paws meet seamlessly. PetPal Connect fosters a personal connection in pet adoptions, ensuring furry friends find their homes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoseUs;