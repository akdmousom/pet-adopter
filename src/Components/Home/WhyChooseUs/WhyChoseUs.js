
const WhyChoseUs = () => {

    return (
        <div className="mt-44 py-5 mb-12 mx-auto xl:w-[1120px] bg-[#FFD1D1] ">

            <div>
                <div>
                    <h3 className="text-xl text-center text-[#F04336] font-bold p-4 ">Why Choose Us?</h3>
                    <h1 className="text-center font-bold lg:text-4xl md:text-2xl">Best Service to Breeds Your <br /> Loved Dog Explore</h1>

                    {/* box */}
                    <div className="mt-12 mb-14  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                        {/* Card 1  */}
                        <div>
                            <div className="w-[200px] mx-auto h-[200px] relative rounded-md bg-white">
                                <h1 className="text-center text-[#000] text-3xl font-bold items-center absolute left-[70px] top-[83px]">159 <br /> +</h1>
                            </div>
                            <p className="text-2xl font-bold text-center mt-2">Vet <br /> Suport</p>
                        </div>

                        {/* Card 2  */}
                        <div>
                            <div className="w-[200px] mx-auto h-[200px] relative rounded-md bg-white">
                                <h1 className="text-center text-[#000] text-3xl font-bold items-center absolute left-[70px] top-[83px]">256 <br /> +</h1>
                            </div>
                            <p className="text-2xl font-bold text-center mt-2">Adoption <br /> Done</p>
                        </div>

                        {/* Card 3  */}
                        <div>
                            <div className="w-[200px] mx-auto h-[200px] relative rounded-md bg-white">
                                <h1 className="text-center text-[#000] text-3xl font-bold items-center absolute left-[70px] top-[83px]">5K <br /> +</h1>
                            </div>
                            <p className="text-2xl font-bold text-center mt-2">DOG <br /> BREEDING</p>
                        </div>

                        {/* Card 4  */}
                        <div>
                            <div className="w-[200px] mx-auto h-[200px] relative rounded-md bg-white">
                                <h1 className="text-center text-[#000] text-3xl font-bold items-center absolute left-[70px] top-[83px]">7 <br /> +</h1>
                            </div>
                            <p className="text-2xl font-bold text-center mt-2">YEARS OF <br /> HISTORY</p>
                        </div>


                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default WhyChoseUs;