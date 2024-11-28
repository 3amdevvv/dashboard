import { UserButton } from '@clerk/nextjs'
import React, { Children } from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default DashboardLayout
