import { auth } from '@/app/api/auth';
import UserProfile from '@/components/UserProfile/UserProfile';
import { redirect } from 'next/navigation';

const page = async() => {
    const session = await auth();
    if (!session?.user || !session?.user?.email) {
        redirect('/')
    }
    return (
        <div>
            <UserProfile />
        </div>
    );
};

export default page;