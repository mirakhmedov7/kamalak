import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar, Navbar } from '@/components/index'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full ml-15">
        {/* <SidebarTrigger /> */}
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  )
}
