'use client'
import { Input } from '@/components/ui/input'
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
import { cn } from '@/lib/utils'

const Header = () => {
  const [filterSelect, setFilterSelect] = useState<string>('Ismi')
  const [statusSelect, setStatusSelect] = useState<string>('Faol')
  const [groupSelect, setGroupSelect] = useState<string>('Barcha guruhlar')
  return (
    <header className="flex items-center justify-between p-12">
      <h1 className="font-bold text-2xl">Tarbiyalanuvchilar</h1>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search"
          className="w-[275px] bg-slate placeholder:text-grey"
        />
        <Select
          value={filterSelect}
          onValueChange={(value) => setFilterSelect(value)}
        >
          <SelectTrigger className="min-w-[150px] bg-slate text-grey cursor-pointer">
            Saralash:
            <span className="text-black font-medium">
              <SelectValue placeholder={`Saralash: ${filterSelect}`} />
            </span>
          </SelectTrigger>
          <SelectContent className="cursor-pointer">
            <SelectGroup>
              <SelectLabel>Saralash</SelectLabel>
              <SelectItem defaultChecked={true} value="Ismi">
                Ismi
              </SelectItem>
              <SelectItem value="Yoshi">Yoshi</SelectItem>
              <SelectItem value="Qo'shilgan sana">Qo'shilgan sana</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
              <SelectItem defaultChecked={true} value="Barcha guruhlar">
                Barcha guruhlar
              </SelectItem>
              <SelectItem defaultChecked={true} value="Katta guruh">
                Katta guruh
              </SelectItem>
              <SelectItem value="O'rta guruh">O'rta guruh</SelectItem>
              <SelectItem value="Kichik guruh">Kichik guruh</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          value={statusSelect}
          onValueChange={(value) => setStatusSelect(value)}
        >
          <SelectTrigger className="min-w-[100px] bg-slate text-grey cursor-pointer">
            <span
              className={cn(
                'font-medium',
                statusSelect == 'Faol' ? 'text-green' : 'text-red'
              )}
            >
              <SelectValue placeholder={`Faol`} />
            </span>
          </SelectTrigger>
          <SelectContent className="cursor-pointer">
            <SelectGroup>
              <SelectLabel>Saralash</SelectLabel>
              <SelectItem value="Faol">Faol</SelectItem>
              <SelectItem value="Nofaol">Nofaol</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}

export default Header
