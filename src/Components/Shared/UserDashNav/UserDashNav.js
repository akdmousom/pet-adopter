import { auth } from '@/app/api/auth';
import Image from 'next/image';
import Link from 'next/link';
import dashboard from '../../../../public/images/user_dashboard.svg'
import social from '../../../../public/images/user-social.svg'
import pet_Request from '../../../../public/images/pet-request.svg'
import post from '../../../../public/images/user_post.svg'
import setting from '../../../../public/images/setting.svg'
import security from '../../../../public/images/security.svg'
import petListing from '../../../../public/images/pet-listing.svg'
import home from '../../../../public/images/home.svg'
import adoptRequest from '../../../../public/images/adopt-request.svg'

const UserDashNav = async({ childrens }) => {
  const session = await auth();
    const user=session.user
    // console.log(user,'navabar')
    const isAdmin = process.env.ADMIN_DATA && user.email === process.env.ADMIN_DATA;

  const Navlinks = (
    <>
    {
      isAdmin?
      <>
    <li className=' border-y-2 lg:border-y-4 border-[#f04336] mb-2 lg:mb-5'><Link   href={{pathname:"/userprofile",query:{user}}} className='py-2 lg:py-5'>
        <div className="avatar  lg:ml-5">
          <div className="w-8 lg:w-16 rounded-full">
            <Image width={200} height={200} src={user.image} alt='' />
          </div>
        </div>
        {user.name}</Link></li>
        <li className=''><Link href="/admin_dashboard"><Image src={dashboard} alt="alt" width={20} height={20} /> Admin Dashboard</Link></li>
      <li className=' '><Link href="/petCommunity "><Image src={social} alt="alt" width={20} height={20} />All User</Link></li>
      <li className=''><Link href="/allPetRequest"><Image src={pet_Request} alt="alt" width={20} height={20} />All pendding Post</Link></li>
      <li><Link href='/postPetCommunity'><Image src={post} alt="alt" width={20} height={20} /> Post Medical Store</Link></li>
      <li className='border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={home} alt="alt" width={20} height={20} /> Home Page</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={adoptRequest} alt="alt" width={20} height={20} /> Adopt Request</Link></li>
      <li className=' '><Link href="/pet-listing" ><Image src={petListing} alt="alt" width={20} height={20} /> Pet-Listing</Link></li>
      <li className=' '><Link href="/addreview" ><Image src={post} alt="alt" width={20} height={20} /> Add Review</Link></li>
      <li className=' border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={setting} alt="alt" width={20} height={20} /> Setting</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={security} alt="alt" width={20} height={20} /> Security</Link></li>
    </>
    :
    <>
      <li className=' border-y-2 lg:border-y-4 border-[#f04336] mb-2 lg:mb-5'><Link   href={{pathname:"/userprofile",query:{user}}} className='py-2 lg:py-5'>
        <div className="avatar  lg:ml-5">
          <div className="w-8 lg:w-16 rounded-full">
            <Image width={200} height={200} src={user.image} alt='' />
          </div>
        </div>
        {user.name}</Link></li>
      <li className=''><Link href="/dashboard"><Image src={dashboard} alt="alt" width={20} height={20} /> Dashboard</Link></li>
      <li className=' '><Link href="/petCommunity "><Image src={social} alt="alt" width={20} height={20} /> Pet Lover Community</Link></li>
      <li className=''><Link href="/allPetRequest"><Image src={pet_Request} alt="alt" width={20} height={20} /> All adopt Request</Link></li>
      <li><Link href='/postPetCommunity'><Image src={post} alt="alt" width={20} height={20} /> Post Your Community</Link></li>
      <li className='border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={home} alt="alt" width={20} height={20} /> Home Page</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={adoptRequest} alt="alt" width={20} height={20} /> Adopt Request</Link></li>
      <li className=' '><Link href="/pet-listing" ><Image src={petListing} alt="alt" width={20} height={20} /> Pet-Listing</Link></li>
      <li className=' '><Link href="/addreview" ><Image src={post} alt="alt" width={20} height={20} /> Add Review</Link></li>
      <li className=' border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" ><Image src={setting} alt="alt" width={20} height={20} /> Setting</Link></li>
      <li className=' '><Link href="/adoptHerePage" ><Image src={security} alt="alt" width={20} height={20} /> Security</Link></li>
    </>

    }
    </>
  )
  return (
    <div className=''>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col lg:flex-row">
          {/* Navbar */}
          <div className="w-full basis-1/4 navbar bg-white shadow-2xl">
            <div className="flex-none  lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 lg:hidden">Pet Adopter</div>
            <div className="flex-none min-w-full  hidden lg:block lg:max-h-screen  lg:overflow-auto">
              <ul className="menu menu-verticle min-h-screen font-bold text-lg  ">

                {Navlinks}

              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className='lg:h-screen lg:overflow-hidden w-full'>
            <div className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
              {childrens}
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 min-h-full bg-base-200">
            {Navlinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashNav;