import Image from "next/image";
import Statistics from "../Statistics/Statistics";

const WhyChoseUs = () => {

    return (
        <>
            <div className="dark:bg-[#1B2430] max-w-full mx-auto px-6">
                <div className="grid mx-auto py-8">
                    <div className="text-black">
                        <div className="md:py-20">
                            <h3 className="text-base font-semibold text-center text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Excellence in Every Choice</h3>
                            <h3 className="text-3xl lg:text-5xl text-center font-bold pb-6 dark:text-white">Why Choose Us?</h3>
                            <p className="font-medium text-center pb-6 dark:text-white">Choose us for a personalized adoption experience tailored to your needs, ensuring a seamless journey to finding your perfect furry companion. <br />With our commitment to responsible pet placement and ongoing support, trust us to help you welcome a new member into your family with joy and confidence.</p>
                            <Statistics />
                        </div>
                        <div className="lg:pb-20">
                            <h3 className="text-base font-semibold text-center text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Survey Our Suite of Services</h3>
                            <h3 className="text-3xl lg:text-5xl text-center font-bold pb-6 dark:text-white">Discover Our Offerings</h3>
                            <p className="font-medium text-center pb-6 dark:text-white">Explore our diverse range of furry companions awaiting their forever homes, each with their own unique story and personality. <br />From playful pups to cuddly kittens, discover the perfect match to bring joy and companionship into your life.</p>
                        </div>
                        <div className="grid lg:grid-cols-4 gap-6 items-center justify-center py-4">
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/Pw1vByK/pet-24service.jpg" alt="Pet-24/7 Service" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] mt-4 font-bold">24/7 Service</h3>
                                <p className="text-black mt-2 text-center dark:text-white">Unwavering support, anytime, anywhere. Our 24/7 service ensures a smooth adoption journey with assistance available around the clock</p>
                            </div>
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/BwxjKqf/pet-doctor.jpg" alt="pet-doctor" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] mt-4 font-bold">Experienced Staff</h3>
                                <p className="text-black mt-2 text-center dark:text-white">Adopt with tailored guidance. Our In-Home Consultants bring personalized advice to your doorstep, ensuring the perfect match for your unique lifestyle.</p>
                            </div>
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/QQJ5kgJ/pet-2.jpg" alt="pet-2" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] mt-4 font-bold">In-Home Consult</h3>
                                <p className="text-black mt-2 text-center dark:text-white">Expertly guided adoptions. Our Pro Staff is committed to making your adoption experience enjoyable, providing knowledgeable assistance at every turn.</p>
                            </div>
                            <div className="mb-4 lg:mb-0">
                                <Image src="https://i.ibb.co/KKFgFF3/pet-3.jpg" alt="pet-3" width={300} height={300}
                                    className="rounded-full border-white hover:border-black hover:shadow-md border-2 hover:scale-110 transfrom duration-700 w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-cover mx-auto" data-aos="zoom-in" />
                                <h3 className="text-center text-xl text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] mt-4 font-bold">PetPal Connect</h3>
                                <p className="text-black mt-2 text-center dark:text-white">Where hearts and paws meet seamlessly. PetPal Connect fosters a personal connection in pet adoptions, ensuring furry friends find their homes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoseUs;