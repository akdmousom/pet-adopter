import Image from "next/image";


const MeetOurTeam = () => {

    return (
        <div className="space-y-10 mt-14 mb-14 max-w-full mx-auto">

        {/* Title  */}
        <div className="text-center space-y-1">
            <h3 className="text-3xl lg:text-5xl text-[#F04336] text-center font-bold my-8">Meet Our Team</h3>
            <p className="font-semibold">Get to know the team behind Pawwelfare. We are veterinarians, <br/> animal rights activists and volunteers. But above all, we are animal lovers.</p>
        </div>

        {/* Meet Our Team Card */}

        <div className="grid  grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className=' w-60 text-center mx-auto'>

                <div className=" border-[3px] rounded-full mx-auto w-32 h-32">
                    <Image width={300} height={300} className='mx-auto object-cover h-32 w-32 rounded-full' src="https://i.ibb.co/TPV74t0/team6.jpg" alt="" />
                </div>

                <div className="space-y-1">
                    <h1 className='text-xl mt-2 font-bold'>John Smith</h1>
                    <h4 className="font-bold">Founder & CEO</h4>
                    <p>Find the perfect sitter to make sure your puppy receives the best possible care in your absence.</p>
                </div>
            </div>
            {/* Card 2 */}
            <div className=' w-60 text-center mx-auto'>

                <div className=" border-[3px] rounded-full mx-auto w-32 h-32">
                    <Image width={300} height={300} className='mx-auto object-cover h-32 w-32 rounded-full' src="https://i.ibb.co/MSLktRC/team1.jpg" alt="" />
                </div>

                <div className="space-y-1">
                    <h1 className='text-xl mt-2 font-bold'>Daniel Lee</h1>
                    <h4 className="font-bold">Volunteer Coordinator</h4>
                    <p>Find the perfect sitter to make sure your puppy receives the best possible care in your absence.</p>
                </div>
            </div>
            {/* Card 3 */}
            <div className=' w-60 text-center mx-auto'>

                <div className=" border-[3px] rounded-full mx-auto w-32 h-32">
                    <Image width={300} height={300} className='mx-auto object-cover h-32 w-32 rounded-full' src="https://i.ibb.co/4f0w2m3/team5.jpg" alt="" />
                </div>

                <div className="space-y-1">
                    <h1 className='text-xl mt-2 font-bold'>Emma Foster</h1>
                    <h4 className="font-bold">Adoption Coordinator</h4>
                    <p>Facilitating the adoption process, matching pets with suitable families, and conducting home checks.</p>
                </div>
            </div>
            {/* Card 4 */}
            <div className=' w-60 text-center mx-auto'>

                <div className=" border-[3px] rounded-full mx-auto w-32 h-32">
                    <Image width={300} height={300} className='mx-auto object-cover h-32 w-32 rounded-full' src="https://i.ibb.co/cYHQRCp/team4.jpg" alt="" />
                </div>

                <div className="space-y-1">
                    <h1 className='text-xl mt-2 font-bold'>David Parker</h1>
                    <h4 className="font-bold">Animal Care Specialist</h4>
                    <p>Ensuring the well-being of animals in the adoption center, providing medical care, and coordinating with veterinarians.</p>
                </div>
            </div>
            {/* Card 5 */}
            <div className=' w-60 text-center mx-auto'>

                <div className=" border-[3px] rounded-full mx-auto w-32 h-32">
                    <Image width={300} height={300} className='mx-auto object-cover h-32 w-32 rounded-full' src="https://i.ibb.co/tzTW92P/team2.jpg" alt="" />
                </div>

                <div className="space-y-1">
                    <h1 className='text-xl mt-2 font-bold'>Ethan Wells</h1>
                    <h4 className="font-bold">Pet Photographer</h4>
                    <p>FCapturing high-quality images of available pets for online profiles and marketing materials.</p>
                </div>
            </div>
            

        </div>

    </div>
    );
};

export default MeetOurTeam;