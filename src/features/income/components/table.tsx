'use client'
import React, { useState } from 'react'
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { income, IIncome } from '@/constants/income'
import Image from 'next/image'
import { Pencil } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Table = () => {
  const [incomeData] = useState<IIncome[]>(income)
  return (
    <UITable>
      <TableHeader>
        <TableRow className="[&>th]:text-grey [&>th]:text-base">
          <TableHead className="w-[50px] pl-10">T/r</TableHead>
          <TableHead className="text-center w-[70px]">Rasm</TableHead>
          <TableHead>Tarbiyalanuvchi</TableHead>
          <TableHead>Tug’ulgan kun.oy.yil</TableHead>
          <TableHead>To’lov sanasi</TableHead>
          <TableHead>Summa</TableHead>
          <TableHead className="text-center">O’zgartirish</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {incomeData.map((item) => (
          <TableRow key={item.id} className="[&>td]:text-base [&>td]:py-5">
            <TableCell className="font-medium  pl-10">{item.id}</TableCell>
            <TableCell>
              <Image
                src={'/assets/avatar-children.png'}
                width={30}
                height={30}
                alt={item.name}
                className="m-auto"
              />
            </TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.birthDate}</TableCell>
            <TableCell>{item.paymentDate}</TableCell>
            <TableCell>{item.paymentAmount}</TableCell>
            <TableCell className="text-center">
              <AlertDialog>
                <AlertDialogTrigger className="cursor-pointer">
                  <Pencil className="text-orange" />
                </AlertDialogTrigger>
                <AlertDialogContent className="w-[400px]">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-3xl">
                      To’lo’v qo’shish
                    </AlertDialogTitle>
                    <h3 className="text-yellow text-xl">
                      Aniqlik bilan to'ldiring!!!
                    </h3>
                    <Label htmlFor="paymentAmount" className="mt-3 text-base">
                      Axmadov Madamin Maxmud o’g’li
                    </Label>
                    <Input
                      id="paymentAmount"
                      placeholder="To’lov summa kiriting"
                      type="number"
                    />
                  </AlertDialogHeader>
                  <AlertDialogFooter className="sm:justify-start [&>button]:w-[175px] [&>button]:text-xl [&>button]:py-5">
                    <AlertDialogAction className="bg-red-background text-red border-red border-1 hover:bg-red-background cursor-pointer active:scale-95">
                      Saqlash
                    </AlertDialogAction>
                    <AlertDialogCancel className="bg-green-background text-green border-green border-1 hover:bg-green-background cursor-pointer active:scale-95 hover:text-green">
                      Bekor qilish
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  )
}

export default Table
