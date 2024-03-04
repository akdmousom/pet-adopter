import Image from 'next/image'
import React from 'react'

const form = () => {
  return (
    <div className='md:grid grid-col-2 gap-3'>
      <Image src={'https://i.ibb.co/3CGCmG6/download-1.jpg'} height={600} width={400} alt='donation photo' className='w-full'/>
    </div>
  )
}

export default form
