import { redirect } from "next/navigation";
import { auth } from "../api/auth";

const page = async () => {

    const session = await auth();

    if (!session) redirect('/api/auth/signin');

    return (
        <div className='min-h-screen'>
            <h1>Donation Page</h1>
        </div>
    );
};

export default page;