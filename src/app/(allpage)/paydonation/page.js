
import DonationStripe from "@/components/PayDonation/DonationStripe/DonationStripe"
import { auth } from "@/app/api/auth";
const page = async({ searchParams }) => {
    const session = await auth();
    if (!session?.user) {
        redirect('/')
    }
    console.log(searchParams.pay)
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/rcQHptj/adorable-pets-holds-empty-bowls-600nw-2290215819.webp)' }} className='m-10 w-full h-full mx-auto bg-black bg-opacity-60 bg-cover bg-center py-24'>
            <h3 className="text-center font-semibold text-2xl uppercase pt-10">you are donating ${searchParams.pay}</h3>
            <p className="text-center pt-2">please enter your card details and confirm payment</p>
            <DonationStripe session={session} pay={searchParams.pay}/>
        </div>
    )
}

export default page
