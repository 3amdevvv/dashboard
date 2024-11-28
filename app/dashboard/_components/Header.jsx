import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
      <Image src={'./logo.svg'} height={160} width={100} alt='logo' />
      <ul className='hidden md:flex gap-6'>
        <li >Dashboard</li>
        <li>Questions</li>
        <li>Upgrade</li>
        <li>How it works</li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header
