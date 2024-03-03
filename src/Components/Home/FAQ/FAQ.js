import Image from 'next/image';
import React from 'react';

const FAQ = () => {
    return (
        <>
            <div className=' py-8 mb-8 border-4'>
                <h3 className='text-3xl lg:text-5xl text-center font-bold pb-6'>FAQ</h3>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-3 py-4 px-4'>
                    <div className='w-1/2'>
                        <Image src="https://i.ibb.co/hKdxMdP/pet-6.jpg" alt="pet-6" width={400} height={400} className='hidden md:block rounded-md w-[400px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[400px] lg:h-[400px] object-cover' />
                    </div>
                    <div>
                        <div className="collapse collapse-arrow bg-[#FFF5E4] border-2 border-black mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                How does the adoption process work on your website?
                            </div>
                            <div className="collapse-content">
                                <p>Our adoption process is simple! Browse available pets, submit an adoption application, and once approved, you can meet your potential new family member. If it is a match made in heaven, complete the adoption paperwork, and welcome your new pet home!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-[#FFF5E4] border-2 border-black mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Can I meet the pet before deciding to adopt?
                            </div>
                            <div className="collapse-content">
                                <p>Absolutely! We encourage meet-and-greets to ensure compatibility. Schedule a visit to spend time with your potential pet and see if it is a perfect match.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-[#FFF5E4] border-2 border-black mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Are all pets on your website up-to-date on vaccinations?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, all our pets receive necessary vaccinations and veterinary care before adoption. Your new furry friend will come to you healthy and ready for a lifetime of companionship.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-[#FFF5E4] border-2 border-black mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What support do you provide post-adoption?
                            </div>
                            <div className="collapse-content">
                                <p>We are committed to your ongoing success! Our team offers post-adoption support and resources to ensure a smooth transition for both you and your new pet.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-[#FFF5E4] border-2 border-black mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Do you offer a trial period for adoptions?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we understand the importance of a good fit. We provide a trial period during which you can assess the compatibility and make sure your new pet feels right at home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;