import { auth } from "@/app/api/auth";
import AddReview from "@/components/AddReview/AddReview";
import { redirect } from "next/navigation";

const page = async () => {
    const session = await auth();
    if (!session?.user || !session?.user?.email) {
        redirect('/')
    }
    const user = session?.user

    return (
        <div>
            <AddReview user={user} />
        </div>
    );
};

export default page;