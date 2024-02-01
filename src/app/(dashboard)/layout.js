import { Poppins } from 'next/font/google'
import '../globals.css'



const poppins = Poppins(
  { 
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight:['400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Dashboard',
  description: 'Adopt a pet form here we are happy to give you our loving pets',
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body className={poppins.className}>


          <div className="bg-[#FFF5E4] min-h-screen">
            {children}
          </div>

  
   
      </body>
    </html>
  )
}