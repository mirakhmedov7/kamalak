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

import { childrenData as data, IChildrenData } from '@/constants/children-data'
import Image from 'next/image'
import { CustomButton } from '@/components/'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const Table = () => {
  const toggleChildStatus = (id: number) => {
    setChildrenData((prev) =>
      prev.map((child) =>
        child.id === id ? { ...child, status: !child.status } : child
      )
    )
  }
  const [childrenData, setChildrenData] = useState<IChildrenData[]>(data)
  return (
    <UITable>
      <TableHeader>
        <TableRow className="[&>th]:text-grey [&>th]:text-base">
          <TableHead className="w-[50px] pl-10">T/r</TableHead>
          <TableHead className="text-center w-[70px]">Rasm</TableHead>
          <TableHead>Tarbiyalanuvchi</TableHead>
          <TableHead>Tug’ulgan kun.oy.yil</TableHead>
          <TableHead>Telefon raqam</TableHead>
          <TableHead>Seriya raqam</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {childrenData.map((item) => (
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
            <TableCell>{item.phoneNumber}</TableCell>
            <TableCell>{item.serialNumber}</TableCell>
            <TableCell className="text-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <CustomButton variant={item.status ? 'active' : 'inactive'}>
                    {item.status == true ? 'Faol' : 'Nofaol'}
                  </CustomButton>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-[400px]">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-3xl">
                      Ogohlantirish
                    </AlertDialogTitle>
                    <p className="text-yellow text-xl">
                      Diqqat bilan o'qing!!!
                    </p>
                    <AlertDialogDescription className="text-xl">
                      Haqiqatan ham bu mijozni faolsizlantirmoqchimisiz?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="sm:justify-start [&>button]:w-[175px] [&>button]:text-xl [&>button]:py-5">
                    <AlertDialogAction
                      onClick={() => toggleChildStatus(item.id)}
                      className="bg-red-background text-red border-red border-1 hover:bg-red-background cursor-pointer active:scale-95"
                    >
                      Ha
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
