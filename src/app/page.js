
import GalleryPhoto from '@/Components/Home/GalleryPhoto/GalleryPhoto'
import PetSection from '@/Components/Home/PetSection/PetSection'
import PetService from '@/Components/Home/PetService/PetService'
import UserReview from '@/Components/Home/UserReview/UserReview'
import Banner from '@/components/Home/Banner/Banner'
import Donate from '@/components/Home/Donate/Donate'
import WhyChoseUs from '@/components/Home/WhyChooseUs/WhyChoseUs'

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChoseUs />
      <PetService/>
      <Donate />
      <PetSection/>
      <GalleryPhoto/>
      <UserReview/>


    </div>
  )
}
