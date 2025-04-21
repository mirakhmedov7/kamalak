'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import Image from 'next/image'
import { sidebarPages } from '@/constants/sidebar-pages'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { usePathname } from 'next/navigation'

const AppSidebar = () => {
  const pathname = `/${usePathname().split('/')[1]}`
  console.log(pathname)
  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="p-7">
        <Link href={'/dashboard'}>
          <Image
            src="/assets/logo-full.svg"
            alt="kamalak Logo"
            width={185}
            height={105}
            priority={true}
          />
        </Link>
      </SidebarHeader>
      <SidebarContent className={cn('mt-[30px] flex items-center')}>
        <SidebarGroup className="items-center">
          <SidebarMenu className={cn('flex flex-col gap-4 ')}>
            {sidebarPages.map((item) => {
              const Icon = item.icon
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild size={'lg'}>
                    <Link
                      href={item.url}
                      className={cn(
                        `items-center text-lg text-grey transition duration-300 sidebar-item gap-2 [&>svg]:size-auto active:text-white active:scale-95 p-5 hover:!bg-primary hover:text-white rounded-md sidebarIcon-${item.id}`,
                        item.url === pathname
                          ? `bg-primary text-white sidebarIcon-${item.id}--active`
                          : ''
                      )}
                    >
                      <Icon className="text-xl" />
                      <span className={cn('text-lg')}>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size={'lg'}
              className="flex items-center justify-between flex-row"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/assets/avatar.png" />
                    <AvatarFallback>Ma</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">Madamin</p>
                    <p className="text-base text-grey">Menejer</p>
                  </div>
                </div>
                <Link href={'/dashboard'}>
                  <LogOut />
                </Link>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
