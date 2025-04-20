import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Navbar, Sidebar } from '@/components/index'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full ml-15">
        {/* <SidebarTrigger /> */}
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  )
}
