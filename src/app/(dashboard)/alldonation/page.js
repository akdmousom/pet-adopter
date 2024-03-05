import { auth } from '@/app/api/auth';

const page = async() => {
    // //api/v1/donations
    const session = await auth();
    // if (!session?.user || session?.user?.role !=='admin') {
    //     redirect('/')
    // }  className='w-[230px] min-w-[230px]'
    const res = await fetch('https://pet-adopter-backend.vercel.app/api/v1/donations', {
        cache:'no-store'
    })
    const allDonations = await res.json()
    // console.log(allDonations)
    return (
        <div className='p-10'>
            <h3 className='uppercase font-semibold text-3xl text-center pb-5'>all donation {allDonations?.length > 0 && <span>({allDonations.length})</span>}</h3>
            <div className="overflow-x-scroll">
                <table className="table">
                    <thead>
                        <tr >
                            <th className='font-bold uppercase text-base'>name</th>
                            <th className='font-bold uppercase text-base'>email</th>
                            <th className='font-bold uppercase text-base'>amount</th>
                            <th className='font-bold uppercase text-base'>msg</th>
                            <th className='font-bold uppercase text-base'>transID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allDonations?.map(item => <tr key={item?._id}>
                            <td>{item?.name}</td>
                            <td>{item?.email}</td>
                            <td>${item?.amount}</td>
                            <td>{item?.msg}</td>
                            <td>{item?.transID}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default page
