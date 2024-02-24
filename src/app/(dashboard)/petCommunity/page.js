import PetCommunity from "@/components/PetCommunity/PetCommunity";

import { auth } from '@/app/api/auth';
const page = async() => {
    const session = await auth();
  const user = session.user
    return (
        <div className="">
            <PetCommunity user={user} />
        </div>
    );
};

export default page;