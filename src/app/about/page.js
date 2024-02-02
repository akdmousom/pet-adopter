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
<<<<<<< HEAD:src/app/(allpage)/about/page.js

            <About />


=======
            <h1>
                <About />

            </h1>
>>>>>>> 8fe44d53ae8886df06197b5a01eb4f044893c865:src/app/about/page.js
        </div>
    );
};

export default AboutPage;