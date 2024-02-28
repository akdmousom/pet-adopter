import { auth } from "@/app/api/auth";
import PetCommunity from "@/components/PetCommunity/PetCommunity";
import { redirect } from "next/navigation";

const page = async() => {
    const session = await auth();
    if (!session?.user || !session?.user?.email) {
        redirect('/')
    }
  const user = session?.user
    return (
        <div className="">
            <PetCommunity user={user} />
        </div>
    );
};

export default page;