import { SidebarProvider } from '@/components/ui/sidebar'
import { Sidebar, Navbar } from '@/components/index'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full mx-10">
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  )
}
