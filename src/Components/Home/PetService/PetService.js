import Image from "next/image";


const PetService = () => {

    return (
        <div className="dark:bg-[#1B2430] max-w-full mx-auto py-6 lg:py-20">

        <div className="text-center">
            <h3 className="text-base font-semibold text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">What We Provide</h3>
            <h1 className="text-3xl lg:text-5xl text-center font-bold pb-6 dark:text-white">Pet Care Services</h1>
            <p className="font-medium text-center pb-6 dark:text-white">Explore our comprehensive Pet Care Services designed to cater to every aspect of your furry friend's well-being.<br /> From grooming and veterinary care to specialized training programs, we're here to ensure your pet receives the best care possible.</p>
        </div>

      
        {/* Pet Care Services */}
        <div className="lg:py-20">

            <div className=" grid md:px-8 grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-5">

                {/* Card 1 */}
                <div className=' w-60 text-center mx-auto'>

                    <div className="border-pink-500 border-[3px] rounded-full mx-auto w-32 h-32">
                        <Image width={200} height={200} className='mx-auto rounded-full  w-24 h-24 mt-3 mb-3 dark:filter dark:invert' src="https://i.ibb.co/WygKs7k/bank.png" alt="" />
                    </div>

                    <div className="space-y-2">
                        <h1 className='text-xl font-bold mt-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]'>Online Order</h1>
                        <p className="dark:text-white">To offer you a wide range of top-quality pet care products to ensure the health</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className=' w-60 text-center mx-auto'>

                    <div className="border-green-500 border-[3px] rounded-full mx-auto w-32 h-32">
                        <Image width={200} height={200} className='mx-auto rounded-full  w-24 h-24 mt-3 mb-3 dark:filter dark:invert' src="https://i.ibb.co/SQnwsk5/pets.png" alt="" />
                    </div>

                    <div className="space-y-2">
                        <h1 className='text-xl font-bold mt-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]'>Pet Grooming</h1>
                        <p className="dark:text-white">Pet grooming is a vital aspect of pet care that involves maintaining the cleanliness.</p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className=' w-60 text-center mx-auto'>

                    <div className="border-orange-500 border-[3px] rounded-full mx-auto w-32 h-32">
                        <Image width={200} height={200} className='mx-auto rounded-full  w-24 h-24 mt-3 mb-3 dark:filter dark:invert' src="https://i.ibb.co/n78wYTH/dog-house.png" alt="" />
                    </div>

                    <div className="space-y-2">
                        <h1 className='text-xl font-bold mt-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]'>Pet Boarding</h1>
                        <p className="dark:text-white">Pet boarding facilities offer a safe, supervised, and comfortable environment.</p>
                    </div>
                </div>
                {/* Card 4 */}
                <div className=' w-60 text-center mx-auto'>

                    <div className="border-blue-500 border-[3px] rounded-full mx-auto w-32 h-32">
                        <Image width={200} height={200} className='mx-auto rounded-full  w-24 h-24 mt-3 mb-3 dark:filter dark:invert' src="https://i.ibb.co/DrqWLH8/dog.png" alt="" />
                    </div>

                    <div className="space-y-2">
                        <h1 className='text-xl font-bold mt-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]'>Dog Walking</h1>
                        <p className="dark:text-white">It involves taking dogs for walks on a leash, usually in parks, neighborhoods.</p>
                    </div>
                </div>
               
            </div>

        </div>

    </div>
    );
};

export default PetService;