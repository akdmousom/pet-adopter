
const Subscribe = () => {
    return (
        <div className="my-12">

            <div className="bg-[#F04336] md:p-20 p-10 w-5/6  mx-auto rounded-md text-white">
                <div className="md:flex items-center justify-between">
                    <div className="items-center">
                        <h1 className="lg:text-4xl  font-bold">Newsletter For</h1>
                        <p className="font-medium">*Do Not Show Your Email.</p>
                    </div>

                    <div className="md:flex gap-5">
                        <input type="email" placeholder="Enter Your Email..." className="input py-6 md:mt-0 mt-3 input-bordered input-error w-full lg:px-24" />
                        <button className="btn text-[#F04336] hover:bg-black md:ml-0 ml-10 md:mt-0 mt-3">Subscribe</button>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;