import Dashboard from '@/../public/assets/sidebar-icons/dashboard.svg'
import Report from '@/../public/assets/sidebar-icons/report.svg'
import Children from '@/../public/assets/sidebar-icons/children.svg'
import Income from '@/../public/assets/sidebar-icons/income.svg'
import Food from '@/../public/assets/sidebar-icons/food.svg'
import Teachers from '@/../public/assets/sidebar-icons/teachers.svg'

interface ISidebarPage {
  id: number
  title: string
  url: string
  icon: string
}

export const sidebarPages: ISidebarPage[] = [
  {
    id: 1,
    title: 'Boshqaruv paneli',
    url: '/dashboard',
    icon: Dashboard,
  },
  {
    id: 2,
    title: 'Yo’qlama',
    url: '/report',
    icon: Report,
  },
  {
    id: 3,
    title: 'Tarbiyalanuvchilar',
    url: '/children',
    icon: Children,
  },
  {
    id: 4,
    title: 'Hisobod',
    url: '/income',
    icon: Income,
  },
  {
    id: 5,
    title: 'Taomnoma',
    url: '/kitchen',
    icon: Food,
  },
  {
    id: 6,
    title: 'Tarbiyachilar',
    url: '/teachers',
    icon: Teachers,
  },
]
