import { auth } from "@/app/api/auth";
import AdoptRequest from "@/components/AdoptRequest/AdoptRequest";
import AllPetRequest from "@/components/AllPetRequest/AllPetRequest";
import { redirect } from "next/navigation";

const page = async() => {
    // const session = await auth();
    // if (!session?.user || session?.user?.role !=='admin') {
    //     redirect('/')
    // }
    return (
        <div>
            <AdoptRequest />

            {/* <AllPetRequest /> */}
        </div>
    );
};

export default page;