import Image from 'next/image';
import React from 'react';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const About = () => {
    return (
        <>
            <div className="max-w-full mx-auto bg-[#FFF5E4] dark:bg-[#1B2430]">
                <div className="carousel-item relative w-full">
                    <Image src="https://i.ibb.co/MBNhPW4/pet-1.jpg" width={1900} height={600} alt="Pet Banner" className="w-screen lg:w-full h-[400px] lg:h-screen object-cover" />
                    <div className="absolute flex items-center h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] px-3 lg:px-0">
                        <div className="space-y-8 grid justify-center text-justify items-center">
                            <h3 className="text-center text-3xl lg:text-6xl text-white font-bold">About Us</h3>
                            <p className="text-white text-center text-sm lg:text-xl lg:px-10">Welcome to our Pet Adoption Website! We are a passionate team of animal lovers dedicated to creating a meaningful impact on the lives of pets and their future families. Our mission is to connect adorable pets with loving homes, fostering joy and companionship. Committed to the well-being of animals, we strive to make the adoption process seamless and rewarding. Join us in making a difference, one paw at a time.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center space-y-4 justify-around w-full my-8 px-4">
                    <div className="text-black">
                        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#F04336] text-center md:text-left my-8  dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Welcome to The <br /> Pet Adaptor</h3>
                        <p className="text-lg mb-8 dark:text-white">Companies are evaluated and ranked based on 3 main criteria: Financial capacity shown in the latest year’s financial statements,  Media credibility is assessed by Media Coding method – encoding articles about the company on influential media channels.</p>
                        <div className="space-y-4 dark:text-white">
                            <div className="flex items-center gap-2">
                                <Image src="https://i.ibb.co/hZtWyFD/icons8-bone-48.png" width={1900} height={600} alt="Pet Banner" className="h-8 w-8 object-cover" />
                                <p> Graceful goldfish, to small, cute kittens</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="https://i.ibb.co/hZtWyFD/icons8-bone-48.png" width={1900} height={600} alt="Pet Banner" className="h-8 w-8 object-cover" />
                                <p>Feeders are either veterinary qualified staf</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="https://i.ibb.co/hZtWyFD/icons8-bone-48.png" width={1900} height={600} alt="Pet Banner" className="h-8 w-8 object-cover" />
                                <p>Experienced pet owners and animal lovers</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="https://i.ibb.co/hZtWyFD/icons8-bone-48.png" width={1900} height={600} alt="Pet Banner" className="h-8 w-8 object-cover" />
                                <p>Hungry horses: whatever the size of your pet</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="https://i.ibb.co/ZT5KN77/pet-5.jpg" width={1900} height={600} alt="pet-5" className="w-screen lg:w-[1200px] h-[] rounded-3xl px-3 object-cover" />
                    </div>
                </div>


                {/* Meet Our Team */}
                <div className='mt-20 mb-20'>
                    <MeetOurTeam />
                </div>


                <div className="pb-20 px-4">
                    <h3 className="text-3xl lg:text-5xl text-[#F04336] text-center font-bold my-8 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Our Partner</h3>
                    <Marquee>
                        <div className="flex gap-8 justify-center items-center py-6">
                            <Image src="https://i.ibb.co/PrT58Qp/F1-Formula-1.png" width={200} height={600} alt="F1-Formula-1" className="hover:scale-110 hover:border-black border-2 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                            <Image src="https://i.ibb.co/3yn4PhJ/Louis-Vuitton-Print.png" width={200} height={600} alt="Louis Vuitton" className="hover:scale-110 hover:border-black border-2 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                            <Image src="https://i.ibb.co/D7R6575/STANLEY.png" width={200} height={600} alt="STANLEY" className="hover:scale-110 hover:border-black border-2 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                            <Image src="https://i.ibb.co/ChmWZBv/Play-Station.png" width={200} height={600} alt="Play Station" className="hover:scale-110 hover:border-black border-2 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                            <Image src="https://i.ibb.co/N3hv1Jc/roboflow.jpg" width={200} height={600} alt="Play Station" className="hover:scale-110 hover:border-black border-2 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                            <Image src="https://i.ibb.co/2dqTCr5/paws.png" width={200} height={600} alt="Play Station" className="hover:scale-110 hover:border-black border-2 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                            <Image src="https://i.ibb.co/dLhBZSP/petclub.jpg" width={200} height={600} alt="Play Station" className="hover:scale-110 hover:border-black border-2 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                            <Image src="https://i.ibb.co/BsB4bgK/netflix.png" width={200} height={600} alt="Play Station" className="hover:scale-110 hover:border-black border-2 mr-4 transfrom duration-700 w-[150px] h-[150px] mx-auto object-cover" />
                        </div>
                    </Marquee>
                </div>
                {/* Donate Advertisement */}
                {/* <div className="bg-[#FFF5E4] my-8 px-3">
                    <div className="flex flex-1 flex-col lg:flex-row lg:grid-cols-3 gap-6 lg:gap-0 items-center justify-center">
                        <h3 className="text-xl lg:text-4xl font-bold col-span-5">Register your pet with us and <br /> <span className="text-[#F04336]">Get exiting gift</span></h3>
                        <Image src="https://i.ibb.co/7JRXqNQ/pet-4.jpg" width={1900} height={600} alt="pet-4" className="w-[200px] rounded-md lg:w-[250px] h-[200px] lg:h-[320px] col-span-2 object-cover" />
                        <div className="lg:px-3 space-y-4 col-span-5 mx-auto">
                            <h3 className="text-xs lg:text-xl font-medium">We are your local dog home boarding service giving you complete</h3>
                            <Link href="/donation/form">
                                <button className="btn bg-[#F04336] text-white text-center lg:text-left font-bold hover:bg-black">Donate Us</button>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default About;