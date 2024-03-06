import StripePayment from '@/components/Payment/StripePayment/StripePayment';
import { auth } from '@/app/api/auth';
import { getSingleItem } from '@/utils/getSingleitem';
const Page = async ({ searchParams }) => {
    const session = await auth();
    if (!session?.user) {
        redirect('/')
    }
    const item = await getSingleItem(searchParams.id)
    return (
        <div className='bg-white dark:bg-[#1B2430]'>
            <StripePayment item={item} session={session} />
        </div>
    )
}

export default Page
