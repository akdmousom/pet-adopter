import StripePayment from '@/Components/Payment/StripePayment/StripePayment';
import { auth } from '@/app/api/auth';
import { getSingleItem } from '@/utils/getSingleitem';
const Page = async ({ searchParams }) => {
    const item = await getSingleItem(searchParams.id)
    const session = await auth();
    return (
        <>
            <StripePayment item={item} session={session} />
        </>
    )
}

export default Page
