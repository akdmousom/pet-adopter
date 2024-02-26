// 'use client'
import '../../globals.css'
// import UserData from '@/components/UserData/UserData'
import { auth } from '@/app/api/auth';
<<<<<<< HEAD
import UserData from './../../../components/UserData/UserData';
=======
import UserData from './../../../Components/UserData/UserData';
import Admin_dashboard from '@/Components/Admin_penel/Admin_dashboard/Admin_dashboard';
>>>>>>> main
const page = async () => {
    const session = await auth();
    const user = session.user;
    const isAdmin = process.env.ADMIN_DATA && user.email === process.env.ADMIN_DATA;
    return (
        <div>
            {
                isAdmin?
                <Admin_dashboard/>
                :
                <UserData user={user}/>
            }
        </div>
    );
};

export default page;