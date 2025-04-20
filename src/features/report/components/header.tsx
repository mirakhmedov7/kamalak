import { Input } from '@/components/ui/input'
import { DatePicker } from '@/components/date-picker'
import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-12">
      <h1 className="font-bold text-2xl">Tarbiyalanuvchilar</h1>
      <div className="flex items-center gap-2">
        <Input placeholder="Search" className="w-[275px] bg-slate" />
        <Select>
          <SelectTrigger className="w-[180px] bg-slate">
            <SelectValue placeholder="Select a group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Katta guruh</SelectItem>
              <SelectItem value="banana">O'rta guruh</SelectItem>
              <SelectItem value="blueberry">Mini guruh</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DatePicker />
      </div>
    </header>
  )
}

export default Header
