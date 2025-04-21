import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <Avatar className="w-[105px] h-[105px]">
          <AvatarImage src="/assets/teacher-avatar.png" />
          <AvatarFallback className="text-2xl">B</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-medium mb-2">
            Bekmirzayeva Nigora Atxamovna
          </h1>
          <p>Tarbiyachi</p>
        </div>
      </div>
      <Button size={'lg'} className="text-base">
        Malumotlarni o’zgartirish
      </Button>
    </div>
  )
}

export default Header
