import { auth } from "@/app/api/auth";
import AddReview from "@/components/AddReview/AddReview";

const page = async () => {

    const session = await auth();
    const user = session.user

    return (
        <div>
            <AddReview user={user} />
        </div>
    );
};

export default page;