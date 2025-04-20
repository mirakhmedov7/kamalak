'use client'
import { Input } from '@/components/ui/input'
import { DatePicker } from '@/components/date-picker'
import React, { useState } from 'react'

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
  const [groupSelect, setGroupSelect] = useState<string>('Katta guruh')
  return (
    <header className="flex items-center justify-between p-12">
      <h1 className="font-bold text-2xl">Tarbiyalanuvchilar</h1>
      <div className="flex items-center gap-2">
        <Input placeholder="Search" className="w-[275px] bg-slate" />
        <Select
          value={groupSelect}
          onValueChange={(value) => setGroupSelect(value)}
        >
          <SelectTrigger className="min-w-[150px] bg-slate text-grey cursor-pointer">
            <span className="text-black font-medium">
              <SelectValue placeholder={`Saralash: ${groupSelect}`} />
            </span>
          </SelectTrigger>
          <SelectContent className="cursor-pointer">
            <SelectGroup>
              <SelectLabel>Saralash</SelectLabel>
              <SelectItem defaultChecked={true} value="Katta guruh">
                Katta guruh
              </SelectItem>
              <SelectItem value="O'rta guruh">O'rta guruh</SelectItem>
              <SelectItem value="Kichik guruh">Kichik guruh</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DatePicker />
      </div>
    </header>
  )
}

export default Header
