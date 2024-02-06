
import  Link  from 'next/link';

const UserDashNav = ({childrens}) => {
    const Navlinks=(
        <>
        
        <li className=''><Link href="/dashboard">Dashboard</Link></li>
        <li className=''><Link href="/allPetRequest">All Pet Request</Link></li>
        <li><Link href='/yourRequest'>Your Request</Link></li>
        <li className=''><Link href='/yourRequest'>Menu</Link></li>
    </> 
    )
    return (
        <div className=''>
          <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col lg:flex-row">
    {/* Navbar */}
    <div className="w-full basis-1/4 navbar bg-[#ffe3e1]">
      <div className="flex-none  lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 lg:hidden">Pet Adopter</div>
      <div className="flex-none w-full  hidden lg:block">
        <ul className="menu menu-verticle min-h-screen font-bold text-lg">
        <li className=' border-y-4 border-black  mb-10'><Link href="/dashboard" className='py-10'>
        <div className="avatar ml-5">
  <div className="w-16 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
         Profile
       </Link></li>
          {Navlinks}
        <li className=' border-t-4 border-black  mt-10'><Link href="/" >Home Page</Link></li>
        <li className=' '><Link href="/adoptHerePage" >Adopt Request</Link></li>
        <li className=' '><Link href="/pet-listing" >Pet-Listing</Link></li>
        <li className=' border-t-4 border-black  mt-10'><Link href="/" >Setting</Link></li>
        <li className=' '><Link href="/adoptHerePage" >Security</Link></li>
        <li className=' '><Link href="/pet-listing" >Pet Lover Community</Link></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    {childrens}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default UserDashNav;