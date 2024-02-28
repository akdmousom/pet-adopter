import UpdateShopItem from '@/Components/Shop/UpdateShopItem/UpdateShopItem'
import { auth } from '@/app/api/auth';
import { getSingleItem } from '@/utils/getSingleitem'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({ searchParams }) => {
    const session = await auth();
    if (!session?.user || session?.user?.role !=='admin') {
        redirect('/')
    }
    const item = await getSingleItem(searchParams.itemid)
    return (
        <>
            <UpdateShopItem item={item}/>
        </>
    )
}

export default page
