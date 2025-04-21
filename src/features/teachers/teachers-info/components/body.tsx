import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const fields = [
  {
    id: 'email',
    label: 'Elektron pochta manzil',
    placeholder: 'mirakhmedov09@gmail.com',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Paro’li',
    placeholder: 'axmad0_v',
    type: 'password',
  },
  {
    id: 'groupName',
    label: 'Gurux nomi',
    placeholder: 'Katta gurux',
    type: 'text',
  },
  { id: 'salary', label: 'Maoshi', placeholder: '$ 300.0', type: 'text' },
  {
    id: 'birthDate',
    label: 'Tug‘ilgan sana',
    placeholder: '22.09.2007',
    type: 'text',
  },
  {
    id: 'joinDate',
    label: 'Qabul qilingan sana',
    placeholder: '22.09.2023',
    type: 'text',
  },
  {
    id: 'phone',
    label: 'Telefon Raqami',
    placeholder: '+(998) 99-312-64-20',
    type: 'text',
  },
  { id: 'nationality', label: 'Millat', placeholder: 'Uzbek', type: 'text' },
  {
    id: 'passport',
    label: 'Pasport (ID karta) seriyasi va raqami',
    placeholder: 'AE2410790',
    type: 'text',
  },
  {
    id: 'jshshir',
    label: 'JShShIR',
    placeholder: '52803096590070',
    type: 'text',
  },
]

const inputStyles = 'p-7 bg-[#F9FBFF] text-base placeholder:text-gray-800'
const labelStyles = 'text-base font-normal mb-2'

const Body = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {fields.map(({ id, label, placeholder, type }) => (
        <div key={id}>
          <Label htmlFor={id} className={labelStyles}>
            {label}
          </Label>
          <Input
            id={id}
            type={type}
            disabled
            placeholder={placeholder}
            className={inputStyles}
          />
        </div>
      ))}
    </div>
  )
}

export default Body
