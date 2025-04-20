import React from 'react'
import { Login } from '@/features/auth/index'

const Page = () => {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-lg">
          <Login />
        </div>
      </div>
    </>
  )
}

export default Page
