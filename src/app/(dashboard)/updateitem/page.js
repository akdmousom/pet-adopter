<<<<<<< HEAD
import UpdateShopItem from '@/components/Shop/UpdateShopItem/UpdateShopItem'
=======
import UpdateShopItem from '@/Components/Shop/UpdateShopItem/UpdateShopItem'
>>>>>>> main
import { getSingleItem } from '@/utils/getSingleitem'
import React from 'react'

const page = async ({ searchParams }) => {
    console.log(searchParams)
    const item = await getSingleItem(searchParams.itemid)
    return (
        <>
            <UpdateShopItem item={item}/>
        </>
    )
}

export default page
