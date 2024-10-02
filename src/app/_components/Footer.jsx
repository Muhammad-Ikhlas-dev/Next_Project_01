import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-between items-center w-full gap-y-10
    text-white-blueish text-sm border-t-2 border-black-400 max-w-screen-2xl px-6 xs:px-8 sm:px-12
     bg-black-100 max-md:flex-col mt-12 py-12 mb-0'>
     <p className='text-center'>
     Copyright © 2023 JS Mastery Pro | All Rights Reserved
     </p>
     <div className='flex gap-x-6 md:gap-x-10 cursor-pointer'>
      <p className='text-center'><Link href="/terms-of-use">Terms $ Conditions</Link></p>
      <p className='text-center'><Link href="/privacy-policy">Privacy Policy</Link></p>
     </div>
    </footer>
  )
}

export default Footer
