interface IFoodSchedule {
  id: number
  name: string
  status: 'halol' | 'harom'
  timePeriod: string
  foodTitle: string
}

export const foodSchedule: IFoodSchedule[] = [
  {
    id: 1,
    name: 'Tushlik',
    status: 'halol',
    timePeriod: '10:00 - 10:30',
    foodTitle: 'Taom nomi',
  },
  {
    id: 2,
    name: 'Yengil',
    status: 'halol',
    timePeriod: '11:00 - 11:15',
    foodTitle: 'Taom nomi',
  },
  {
    id: 3,
    name: 'Nonushta',
    status: 'halol',
    timePeriod: '12:00 - 13:00',
    foodTitle: 'Taom nomi',
  },
  {
    id: 4,
    name: 'Kechgi ovqat',
    status: 'halol',
    timePeriod: '15:30 - 16:10',
    foodTitle: 'Taom nomi',
  },
  {
    id: 5,
    name: 'Salat',
    status: 'halol',
    timePeriod: 'Nonushta qoshimcha',
    foodTitle: 'Taom nomi',
  },
  {
    id: 6,
    name: 'Standart qism',
    status: 'halol',
    timePeriod: 'Nonushta qoshimcha',
    foodTitle: 'Taom nomi',
  },
]
