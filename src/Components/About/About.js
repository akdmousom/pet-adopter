import React from 'react';

const About = () => {
    return (
        <div>

            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">About Us</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">We are not just about adorable paws and wagging tails, we are about creating lasting bonds between loving families and rescued animals. Every day, our technology fuels a community of passionate volunteers and dedicated shelter partners, empowering them to find furry friends their forever homes. Join us in transforming lives, one wag at a time.</p>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">The spark ignited during a rainy city walk. Rain pattered on cobblestones, blurring the bustling traffic into a muted haze. But it was the whimper that cut through the noise, leading us to a huddled stray beneath a flickering street lamp. One muddy paw print, imprinted on our hearts, was the genesis of Wagtail Tails. We couldnt leave that shivering soul, and neither could we ignore the countless others, unseen in cramped shelters or lost on lonely streets. Driven by this shared empathy and a quiet promise whispered among the raindrops, we built Wagtail Tails not just as a platform, but as a bridge. A bridge between abandoned souls and loving arms, weaving a kaleidoscope of purrs and happy barks against the backdrop of despair. We poured our passion into crafting a digital haven, a virtual shelter where adopters and adoptees could meet eyes and forge bonds forever. Every successful match, every tail wag in a new home, fuels our fire. We witness stories of heartbreak redeemed, loneliness vanquished, and love blossoming where it seemed impossible. Together, lets rewrite the narrative for every lost soul, one happy ending at a time.</p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <img className="md:hidden block" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Arijit</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <img className="md:hidden block" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Shawon</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <img className="md:hidden block" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Masud</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <img className="md:hidden block" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Tahamid</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <img className="md:hidden block" src="https://i.ibb.co/cwmJ4ZH/Pngtree-business-male-icon-vector-4187852.png" />
                                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">Rasel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;