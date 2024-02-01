import Image from "next/image";


const GalleryPhoto = () => {

    return (
        <div className="mt-16 mb-10 max-w-[1366px] mx-auto">
        {/* Title  */}
        <div className="text-center">
            <h3 className="text-base font-semibold text-[#F04336]">GALLERY PHOTOS</h3>
            <h1 className="text-lg lg:text-3xl md:text-xl font-bold">Pet Care Memories</h1>
        </div>

        {/* Gallery Section  */}

        <div>
            <div className="py-2 p-5 mt-10">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        {/* Image 1  */}
                        <div className="w-1/2 p-1 md:p-2">
                            <Image width={200} height={200}
                                alt="gallery"
                                className="block hover:scale-110 duration-700  hover:cursor-pointer h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/8nZpQhF/pet6.jpg" />
                        </div>
                         {/* Image 2  */}
                        <div className="w-1/2 p-1 md:p-2">
                            <Image width={200} height={200}
                                alt="gallery"
                                className="block hover:scale-110 duration-700  hover:cursor-pointer h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/fMHW4kp/pet8.jpg" />
                        </div>
                         {/* Image 3  */}
                        <div className="w-full p-1 md:p-2">
                            <Image width={200} height={200}
                                alt="gallery"
                                className="block hover:scale-110 duration-700  hover:cursor-pointer h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/zP9QS0L/pet1.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                         {/* Image 4  */}
                        <div className="w-full p-1 md:p-2">
                            <Image width={200} height={200}
                                alt="gallery"
                                className="block hover:scale-110 duration-700 hover:cursor-pointer h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/c39WsX5/pet4.jpg" />
                        </div>
                         {/* Image 5  */}
                        <div className="w-1/2 p-1 md:p-2">
                            <Image width={200} height={200}
                                alt="gallery"
                                className="block hover:scale-110 duration-700  hover:cursor-pointer h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/3Wrxskg/pet3.jpg" />
                        </div>
                         {/* Image 6  */}
                        <div className="w-1/2 p-1 md:p-2">
                            <Image width={200} height={200}
                                alt="gallery"
                                className="block hover:scale-110 duration-700 hover:cursor-pointer h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/jR0g8GQ/pet2.jpg" />
                        </div>
                    </div>
                </div>
            </div>


        </div>


    </div>
    );
};

export default GalleryPhoto;