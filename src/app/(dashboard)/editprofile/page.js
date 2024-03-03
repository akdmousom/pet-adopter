import { auth } from "@/app/api/auth";
import EditProfile from "@/components/EditProfile/EditProfile";
import { redirect } from "next/navigation";


const page = async () => {
    const session = await auth();
    if (!session?.user || !session?.user?.email) {
        redirect('/')
    }
    return (
        <div>
            <EditProfile />
        </div>
    );
};

export default page;