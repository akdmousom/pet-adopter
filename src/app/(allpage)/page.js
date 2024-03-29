
import GalleryPhoto from '@/components/Home/GalleryPhoto/GalleryPhoto'
import PetSection from '@/components/Home/PetSection/PetSection'
import PetService from '@/components/Home/PetService/PetService'
import UserReview from '@/components/Home/UserReview/UserReview'
import Banner from '@/components/Home/Banner/Banner'
import Donate from '@/components/Home/Donate/Donate'
import WhyChoseUs from '@/components/Home/WhyChooseUs/WhyChoseUs'
import FAQ from '@/components/Home/FAQ/FAQ'

export default function Home() {
  return (
    <div className='bg-[#F5F5DC] dark:bg-[#1B2430]'>
      <Banner />
      <WhyChoseUs />
      <PetSection />
      <PetService />
      <Donate />
      <GalleryPhoto />
      <UserReview />
      <FAQ />
    </div>
  )
}
