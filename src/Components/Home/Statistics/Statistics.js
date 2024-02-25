'use client'
import Image from 'next/image';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statistics = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around my-8 max-w-full mx-auto mt-24 bg-[#ffe3e1] dark:bg-[#585d65] lg:py-4">
                    <div className="text-center my-8 lg:mt-0">
                        <Image src="https://i.ibb.co/jD23PLC/icons8-trust-64.png" alt="icons8-charity" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                        <div className="text-center mt-4">
                            <h3 className="flex justify-center text-5xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">
                                {/* <Number n={100} /> */}
                                {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}
                                +</h3>
                            <p className="text-lg font-bold dark:text-white">Client Served</p>
                        </div>
                    </div>
                    <div className="text-center my-8 lg:mt-0">
                        <Image src="https://i.ibb.co/YWn1Cwj/icons8-charity-96.png" alt="icons8-charity-96" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                        <div className="text-center mt-4">
                            <h3 className="flex justify-center text-5xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">
                                {/* <Number n={95} /> */}
                                {counterOn && <CountUp start={0} end={95} duration={2} delay={0} />}
                                %</h3>
                            <p className="text-lg font-bold dark:text-white">Pets Protection</p>
                        </div>
                    </div>
                    <div className="text-center my-8 lg:mt-0">
                        <Image src="https://i.ibb.co/09fpcF9/icons8-cat-94.png" alt="icons8-cat-94" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                        <div className="text-center mt-4">
                            <h3 className="flex justify-center text-5xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">
                                {/* <Number n={800} /> */}
                                {counterOn && <CountUp start={0} end={800} duration={2} delay={0} />}
                                +</h3>
                            <p className="text-lg font-bold dark:text-white">Miles Walked</p>
                        </div>
                    </div>
                    <div className="text-center my-8 lg:mt-0">
                        <Image src="https://i.ibb.co/rFkxL6m/icons8-animal-shelter-64.png" alt="icons8-animal-shelter-64" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                        <div className="text-center mt-4">
                            <h3 className="flex justify-center text-5xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">
                                {/* <Number n={600} /> */}
                                {counterOn && <CountUp start={0} end={600} duration={2} delay={0} />}
                                +</h3>
                            <p className="text-lg font-bold dark:text-white">Animal Shelter</p>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </>
    );
};

export default Statistics;