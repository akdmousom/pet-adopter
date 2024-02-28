import Addshopitem from '@/Components/Shop/Addshopitem/Addshopitem';
import { auth } from '@/app/api/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const addItemPage = async() => {
    const session = await auth();
    if (!session?.user || session?.user?.role !=='admin') {
        redirect('/')
    }
    return (
        <div>
            <Addshopitem />
        </div>
    );
};

export default addItemPage;