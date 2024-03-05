import StripePayment from '@/Components/Payment/StripePayment/StripePayment';
import { auth } from '@/app/api/auth';
import { getSingleItem } from '@/utils/getSingleitem';
const Page = async ({ searchParams }) => {
    const session = await auth();
    if (!session?.user) {
        redirect('/')
    }
    const item = await getSingleItem(searchParams.id)
    return (
        <>
            <StripePayment item={item} session={session} />
        </>
    )
}

export default Page
