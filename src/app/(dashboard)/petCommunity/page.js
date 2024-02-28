import { auth } from "@/app/api/auth";
import PetCommunity from "@/components/PetCommunity/PetCommunity";
import { redirect } from "next/navigation";


const page = async() => {
    const session = await auth();
    if (!session?.user || !session?.user?.email) {
        redirect('/')
    }
    return (
        <div className="">
            <PetCommunity />
        </div>
    );
};

export default page;