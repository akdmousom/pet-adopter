import { Poppins } from 'next/font/google'
import '../globals.css'
import NavBar from '@/components/Shared/NavBar/NavBar'
import Footer from '@/components/Shared/Footer/Footer'


const poppins = Poppins(
  { 
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight:['400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Pet Adopter',
  description: 'Adopt a pet form here we are happy to give you our loving pets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body className={poppins.className}>

          <div className=" max-w-[1366px] mx-auto">
          <NavBar />

          <div className="bg-[#FFF5E4]">
            {children}
          </div>
          <Footer />
        </div>
   
      </body>
    </html>
  )
}