import {
  Dashboard,
  Report,
  Children,
  Income,
  Food,
  Teachers,
} from '../../public/assets/index'

interface ISidebarPage {
  id: number
  title: string
  url: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
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
    url: '/menu',
    icon: Food,
  },
  {
    id: 6,
    title: 'Tarbiyachilar',
    url: '/teachers',
    icon: Teachers,
  },
]
