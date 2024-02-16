import ItemDetails from '@/components/Shop/ItemDetails/ItemDetails';
import { getSingleItem } from '@/utils/getSingleitem';

const singleItemPage = async ({ params }) => {
    const item = await getSingleItem(params.itemid)

    return (
        <div>
            <ItemDetails item={item} />
        </div>
    );
};

export default singleItemPage;