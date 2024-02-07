
import  Link  from 'next/link';

const UserDashNav = ({childrens}) => {
    const Navlinks=(
        <>
        <li className=' border-y-2 lg:border-y-4 border-[#f04336] mb-2 lg:mb-5'><Link href="/dashboard" className='py-2 lg:py-5'>
        <div className="avatar  lg:ml-5">
  <div className="w-8 lg:w-16 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
         Profile</Link></li>
        <li className=''><Link href="/dashboard">Dashboard</Link></li>
        <li className=' '><Link href="/pet-listing" >Pet Lover Community</Link></li>
        <li className=''><Link href="/allPetRequest">All adopt Request</Link></li>
        <li><Link href='/yourRequest'>Your Request</Link></li>
        <li className=''><Link href='/yourRequest'>Menu</Link></li>
        <li className='border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" >Home Page</Link></li>
        <li className=' '><Link href="/adoptHerePage" >Adopt Request</Link></li>
        <li className=' '><Link href="/pet-listing" >Pet-Listing</Link></li>
        <li className=' border-t-2 lg:border-t-4 border-[#f04336]  lg:mt-10'><Link href="/" >Setting</Link></li>
        <li className=' '><Link href="/adoptHerePage" >Security</Link></li>
    </> 
    )
    return (
        <div className=''>
          <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col lg:flex-row">
    {/* Navbar */}
    <div className="w-full basis-1/4 navbar ">
      <div className="flex-none  lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 lg:hidden">Pet Adopter</div>
      <div className="flex-none min-w-full  hidden lg:block lg:max-h-screen  lg:overflow-auto">
        <ul className="menu menu-verticle h-full font-bold text-lg bg-[#ffe3e1] ">
        
          {Navlinks}
        
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <div className='lg:h-screen lg:overflow-hidden '>
    <div className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
    {childrens}
    </div>
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4  min-h-full bg-base-200">
      {Navlinks}
    </ul>
  </div>
</div>
        </div>
    );
};

export default UserDashNav;