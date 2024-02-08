'use client'
import '../../globals.css'
import EmptyDashboard from '@/components/EmptyDashboard/EmptyDashboard'
const page = () => {
         
    return (
        <div className='min-h-screen '>
            <div className="bg-[#ffe3e1] lg:ml-1">
                <h1 className='py-10 text-3xl font-bold text-center'>You Community Post</h1>
            </div>
           <EmptyDashboard/>
        </div>
    );
};

export default page;