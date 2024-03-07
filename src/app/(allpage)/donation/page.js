import DonationPage from '@/components/DonationPage/DonationPage'
import { auth } from '@/app/api/auth';
const page = async () => {
    const session = await auth();
    return (
        <div className='bg-white dark:bg-[#1B2430]'>
            <DonationPage/>
        </div>
    )
}

export default page
