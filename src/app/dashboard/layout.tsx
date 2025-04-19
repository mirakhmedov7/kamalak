import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import Sidebar from '@/features/dashboard/components/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
