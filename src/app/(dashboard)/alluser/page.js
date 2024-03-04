import AllUser from "@/components/Admin_penel/AllUser/AllUser";
import { auth } from '@/app/api/auth';
const page = async() => {
    
  const session= await auth()
  console.log(session,'session')
    return (
        <div>
            <AllUser session={session} />
        </div>
    );
};

export default page;