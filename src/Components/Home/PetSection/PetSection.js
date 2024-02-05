import Image from "next/image";
import Link from "next/link";


const PetSection = () => {

    return (
        <div className="mt-10 mb-20  max-w-[1366px]  mx-auto">
            <div className="text-center space-y-3">

                <Image width={200} height={200} className="w-12 rounded-2xl mx-auto" src="https://i.ibb.co/3fdPN5F/pawprint.gif" alt="" />
                <h3 className="text-2xl font-semibold text-[#F04336]">Meet the Pets</h3>
                <h1 className=" text-lg lg:text-4xl md:text-xl font-semibold">Our Pets Waiting for Adoption</h1>
                <p className="text-base font-medium ">The best overall pet DNA test is Embark Breed & Health Kit (view at Chewy), which <br /> provides you with a breed brwn and information Most pets</p>
            </div>

            {/* Card section */}
            <div >

                <div className="grid grid-cols-1 mx-10 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 gap-4">

                    {/* Card 1 */}
                    <div className="mt-4 mb-6  mx-auto shadow-xl rounded-lg bg-white ">
                       
                            <Image width={300} height={300} className="rounded-t-lg hover:cursor-pointer hover:scale-105 transform delay-200 duration-700 w-full" src="https://i.ibb.co/fMHW4kp/pet8.jpg" alt="" />
                        
                        <div className="p-2">
                            <h3 className="text-lg font-medium mb-2">Max & Luna</h3>

                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus eaque sequi ullam cupiditate quae?</p>

                                <div className="flex justify-around mt-4 mb-2">
                                    <button className="btn-sm text-white rounded-md bg-[#F04336] hover:scale-105 ">Adopt</button>
                                    <button className="btn-sm rounded-md hover:scale-105  bg-pink-700  text-white">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className=" mt-4 mb-6  mx-auto shadow-xl rounded-lg bg-white ">
                        
                            <Image width={300} height={300} className="rounded-t-lg hover:cursor-pointer hover:scale-105 transform delay-200 w-full duration-700" src="https://i.ibb.co/8nZpQhF/pet6.jpg" alt="" />
                        
                        <div className="p-2">
                            
                                <h3 className="text-lg font-medium mb-2">Callie</h3>
                            
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus eaque sequi ullam cupiditate quae?</p>

                                <div className="flex justify-around mt-4 mb-2">
                                    <button className="btn-sm text-white rounded-md bg-[#F04336] hover:scale-105">Adopt</button>
                                    <button className="btn-sm rounded-md hover:scale-105  bg-pink-700  text-white">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card 3 */}
                    <div className=" mt-4 mb-6  mx-auto shadow-xl rounded-lg bg-white ">
                        
                            <Image width={300} height={300} className="rounded-t-lg hover:cursor-pointer hover:scale-105 transform delay-200 w-full duration-700" src="https://i.ibb.co/DM0P3r0/pet7.jpg" alt="" />
                       
                        <div className="p-2">
                                <h3 className="text-lg font-medium mb-2">Leo & Lily</h3>

                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus eaque sequi ullam cupiditate quae?</p>

                                <div className="flex justify-around mt-4 mb-2">
                                    <button className="btn-sm text-white rounded-md bg-[#F04336]  hover:scale-105">Adopt</button>
                                    <button className="btn-sm rounded-md hover:scale-105  bg-pink-700  text-white">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className=" mt-4 mb-6 mx-auto shadow-xl rounded-lg bg-white ">
                       
                            <Image width={300} height={300} className="rounded-t-lg hover:cursor-pointer hover:scale-105 transform delay-200 w-full duration-700" src="https://i.ibb.co/pJqCSPq/pet9.jpg" alt="" />
                        
                        <div className="p-2">
                                <h3 className="text-lg font-medium mb-2">Charlie</h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus eaque sequi ullam cupiditate quae?</p>

                                <div className="flex justify-around mt-4 mb-2">
                                    <button className="btn-sm text-white rounded-md bg-[#F04336] hover:scale-105">Adopt</button>
                                    <button className="btn-sm rounded-md hover:scale-105  bg-pink-700 text-white">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* See All Pets Button  */}
            <div className="text-center my-5 ">
                <Link href="/pet-listing">
                <button className=" p-2 rounded-md bg-[#F04336] text-white hover:scale-105 font-medium ">See All Pets</button>
                </Link>
                
            </div>

        </div>
    );
};

export default PetSection;