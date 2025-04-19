import Dashboard from '@/../public/assets/sidebar-icons/dashboard.svg'
import Report from '@/../public/assets/sidebar-icons/report.svg'
import Children from '@/../public/assets/sidebar-icons/children.svg'
import Income from '@/../public/assets/sidebar-icons/income.svg'
import Food from '@/../public/assets/sidebar-icons/food.svg'
import Teachers from '@/../public/assets/sidebar-icons/teachers.svg'

interface ISidebarPage {
  title: string
  url: string
  icon: string
}

export const sidebarPages: ISidebarPage[] = [
  {
    title: 'Boshqaruv paneli',
    url: '/dashboard',
    icon: Dashboard,
  },
  {
    title: 'Yo’qlama',
    url: '/dashboard',
    icon: Report,
  },
  {
    title: 'Tarbiyalanuvchilar',
    url: '/dashboard',
    icon: Children,
  },
  {
    title: 'Hisobod',
    url: '/dashboard',
    icon: Income,
  },
  {
    title: 'Taomnoma',
    url: '/dashboard',
    icon: Food,
  },
  {
    title: 'Tarbiyachilar',
    url: '/dashboard',
    icon: Teachers,
  },
]
