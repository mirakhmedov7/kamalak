import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Form from './form'

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
      <Dialog>
        <DialogTrigger asChild>
          <Button size={'lg'} className="text-base">
            Malumotlarni o’zgartirish
          </Button>
        </DialogTrigger>
        <DialogContent className='h-[90vh] overflow-y-scroll !max-w-4xl w-full'>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Bekmirzayeva Nigora Atxamovna
            </DialogTitle>
            <DialogDescription className="text-yellow text-xl">
              Aniqlik bilan to’ldiring!!!
            </DialogDescription>
          </DialogHeader>
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header
