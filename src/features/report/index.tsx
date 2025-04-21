import React from 'react'
import Header from './components/header'
import Table from './components/table'
import { Button } from '@/components/ui/button'

const Report = () => {
  return (
    <div className='bg-white rounded-2xl pb-12 mb-10'>
      <Header />
      <Table />
      <Button className='block ml-auto mt-10 mr-12' size={'lg'}>Soqlash</Button>
    </div>
  )
}

export default Report
