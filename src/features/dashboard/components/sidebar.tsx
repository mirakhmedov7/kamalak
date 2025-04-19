import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Image from 'next/image'
import { sidebarPages } from '../constants'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

export default function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <Image
        src="/assets/logo-full.svg"
        alt="kamalak Logo"
        width={250}
        height={105}
        priority={true}
        className="p-8"
      />
      <SidebarContent className="mt-[30px] px-8">
        <SidebarMenu className="flex flex-col gap-4">
          {sidebarPages.map((item) => {
            const { icon: Icon } = item
            return (
              <SidebarMenuItem key={item.title}>
                <Link
                  href={item.url}
                  className="flex items-center gap-2 hover:bg-primary hover:text-white rounded-md text-lg text-grey transition ease-out p-3 sidebar-menu-item"
                >
                  <Icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="px-8 py-4 flex items-center justify-between flex-row">
        <div className="flex items-center gap-2">
          <Image src="/assets/avatar.png" width={42} height={42} alt="avatar" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Madamin</p>
            <p className="text-base text-grey">Menejer</p>
          </div>
        </div>
        <Link href={'/dashboard'}>
          <LogOut />
        </Link>
      </SidebarFooter>
    </Sidebar>
  )
}
