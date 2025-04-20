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

import { childrenReport, IChildrenReport } from '@/constants/children-report'
import Image from 'next/image'
import Checkbox from './checkbox'

const Table = () => {
  const [reportData, setReportData] =
    useState<IChildrenReport[]>(childrenReport)
  return (
    <UITable>
      <TableHeader>
        <TableRow className="[&>th]:text-grey [&>th]:text-base">
          <TableHead className="w-[50px] pl-10">T/r</TableHead>
          <TableHead className="text-center w-[70px]">Rasm</TableHead>
          <TableHead>Tarbiyalanuvchi</TableHead>
          <TableHead>Tug’ulgan kun.oy.yil</TableHead>
          <TableHead className="text-center">Yo’qlama</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reportData.map((item) => (
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
            <TableCell className="text-center">
              <Checkbox
                checked={item.status}
                onChange={() => {
                  setReportData((prev) => {
                    return prev.map((i) =>
                      i.id === item.id ? { ...i, status: !i.status } : i
                    )
                  })
                  return true
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  )
}

export default Table
