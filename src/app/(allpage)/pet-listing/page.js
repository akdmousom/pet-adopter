import Petlisting from '@/components/Petlisting/Petlisting';
import React, { Suspense } from 'react';
import Loading from './loading';

const session = null;


const PetlistingPage = () => {

    return (
        <div>
            <Suspense  fallback={<Loading/>}>

            <Petlisting />
            </Suspense>
        </div>
    );
};

export default PetlistingPage;