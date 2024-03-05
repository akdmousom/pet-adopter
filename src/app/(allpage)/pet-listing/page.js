import Petlisting from '@/components/Petlisting/Petlisting';
import React, { Suspense } from 'react';
import Loading from './loading';

const session = null;


const PetlistingPage = () => {

    return (
        <div className='bg-white dark:bg-[#1B2430]'>
            <Suspense fallback={<Loading />}>
                <Petlisting />
            </Suspense>
        </div>
    );
};

export default PetlistingPage;