import React from 'react'
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {
  return (
    <div className="my-10 flex items-center gap-5">
      <SidebarTrigger className="[&>svg]:!w-6 [&>svg]:!h-6 cursor-pointer" />
      <h1 className="text-2xl font-medium">Salom Madamin 👋🏼,</h1>
    </div>
  )
}

export default Navbar
