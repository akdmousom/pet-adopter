import DonationPage from '@/Components/DonationPage/DonationPage'
import { auth } from '@/app/api/auth';
const page = async () => {
    const session = await auth();
    return (
        <>
            <DonationPage/>
        </>
    )
}

export default page
