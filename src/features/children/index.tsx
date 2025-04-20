import React from 'react'
import Header from './components/header'
import Table from './components/table'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const Children = () => {
  return (
    <div className="bg-white rounded-2xl pb-12 mb-10">
      <Header />
      <Table />
      <div className="flex items-center mt-20 px-12">
        <p className="w-full text-grey">
          Jami bolalar soni 32 ta 1 dan 8 gacha maʼlumotlar koʻrsatilmoqda
        </p>
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="/children"
                className="[&>span]:hidden"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/children" isActive={true}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/children">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/children">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/children">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="/children" className="[&>span]:hidden" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default Children
