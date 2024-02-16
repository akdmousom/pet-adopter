import Image from 'next/image';
import React from 'react';

const Statistics = () => {
    return (
        <>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around my-8 max-w-[1366px] mx-auto mt-20 bg-[#ffe3e1] lg:py-4">
            <div className="text-center my-8 lg:mt-0">
                <Image src="https://i.ibb.co/jD23PLC/icons8-trust-64.png" alt="icons8-charity" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                <div className="text-center mt-4">
                    <h3 className="text-5xl font-bold">100+</h3>
                    <p className="text-lg font-bold">Client Served</p>
                </div>
            </div>
            <div className="text-center my-8 lg:mt-0">
                <Image src="https://i.ibb.co/YWn1Cwj/icons8-charity-96.png" alt="icons8-charity-96" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                <div className="text-center mt-4">
                    <h3 className="text-5xl font-bold">95%</h3>
                    <p className="text-lg font-bold">Pets Protection</p>
                </div>
            </div>
            <div className="text-center my-8 lg:mt-0">
                <Image src="https://i.ibb.co/09fpcF9/icons8-cat-94.png" alt="icons8-cat-94" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                <div className="text-center mt-4">
                    <h3 className="text-5xl font-bold">800+</h3>
                    <p className="text-lg font-bold">Miles Walked</p>
                </div>
            </div>
            <div className="text-center my-8 lg:mt-0">
                <Image src="https://i.ibb.co/rFkxL6m/icons8-animal-shelter-64.png" alt="icons8-animal-shelter-64" width={300} height={300} className="h-24 w-24 mx-auto object-cover" />
                <div className="text-center mt-4">
                    <h3 className="text-5xl font-bold">700+</h3>
                    <p className="text-lg font-bold">Animal Shelter</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default Statistics;