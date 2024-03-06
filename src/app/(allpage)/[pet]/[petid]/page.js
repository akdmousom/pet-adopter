"use server"
import { auth } from '@/app/api/auth';
import PetDetails from '@/components/PetDetails/PetDetails';
import { getSinglePet } from '@/utils/getSinglePet';

const petDetailPage = async ({ params }) => {
    const pet = await getSinglePet(params.petid)
    // console.log(pet);
    const seasion = await auth()

    const { name, email, image } = seasion?.user
    const user = {
        name, email, image
    }

    return (
        <div className='bg-white dark:bg-[#1B2430]'>

            <PetDetails pet={pet} user={user} />
        </div>
    );
};

export default petDetailPage;