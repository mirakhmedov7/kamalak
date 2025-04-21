export interface ITeacher {
  id: number
  name: string
  phoneNumber: string
  childrenAmount: number
  date: string
  salary: number
  role: string
}

export const teacher: ITeacher[] = [
  {
    id: 1,
    name: 'Bekmirzayeva Nigora Atxamovna',
    phoneNumber: '+(998) 99-312-64-20',
    childrenAmount: 32,
    date: '09.25.2025',
    salary: 200,
    role: 'Tarbiyachi',
  },
  {
    id: 2,
    name: 'Bekmirzayeva Nigora Atxamovna',
    phoneNumber: '+(998) 99-312-64-20',
    childrenAmount: 32,
    date: '09.25.2025',
    salary: 200,
    role: 'Tarbiyachi',
  },
]
