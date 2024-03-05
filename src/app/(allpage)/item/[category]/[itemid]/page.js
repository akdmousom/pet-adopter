import ItemDetails from '@/components/Shop/ItemDetails/ItemDetails';
import { getSingleItem } from '@/utils/getSingleitem';

const singleItemPage = async ({ params }) => {
    const item = await getSingleItem(params.itemid)

    return (
        <div className='bg-white dark:bg-[#1B2430]'>
            <ItemDetails item={item} />
        </div>
    );
};

export default singleItemPage;