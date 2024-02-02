import { auth } from '@/app/api/auth';
import About from '@/components/About/About';
import React from 'react';
async function create() {
    const session = await auth();
    console.log(session);
    return session;
}
const x = create();
console.log(x);

const AboutPage = () => {

    return (
        <div>

            <About />


        </div>
    );
};

export default AboutPage;