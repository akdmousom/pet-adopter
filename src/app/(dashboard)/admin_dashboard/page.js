import Admin_dashboard from '@/Components/Admin_penel/Admin_dashboard/Admin_dashboard';
import { auth } from '@/app/api/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async() => {
    const session = await auth();
    if (!session?.user || session?.user?.email !== process.env.ADMIN_DATA) {
        redirect('/')
    }
    return (
        <div className=''>
            <Admin_dashboard/>
        </div>
    );
};

export default page;