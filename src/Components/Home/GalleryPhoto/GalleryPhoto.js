import Image from "next/image";


const GalleryPhoto = () => {

    return (
        <div className="dark:bg-[#1B2430]">
            <div className="Py-12 mx-auto">
                {/* Title  */}
                <div className="text-center">
                    <h3 className="text-base font-semibold text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Gallery Photos</h3>
                    <h1 className="text-3xl lg:text-5xl text-center font-bold pb-6 dark:text-white">Pet Care Memories</h1>
                    <p className="font-medium text-center pb-6 dark:text-white">Capture and cherish precious moments with your furry companion in our section.<br /> Browse heartwarming snapshots and stories shared by our community, celebrating the love and joy pets bring into our lives.</p>
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
        </div>
    );
};

export default GalleryPhoto;