import React from 'react'
import { teacher, ITeacher } from '@/constants/teachers'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

import { Baby, Wallet, TimeBack, IdCard } from '@/../public/assets/index'

const Teachers = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {teacher.map((item: ITeacher) => (
        <Card key={item.id} className="">
          <CardHeader className="flex items-center gap-10">
            <Avatar className="w-[105px] h-[105px]">
              <AvatarImage src="/assets/teacher-avatar.png" />
              <AvatarFallback className="text-2xl">B</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-muted-blue font-bold text-xl mb-2">
                {item.name}
              </h1>
              <p className="text-muted-blue">{item.phoneNumber}</p>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 text-muted-blue [&>div]:flex [&>div]:items-center [&>div]:gap-1 [&>div]:font-medium gap-3">
            <div>
              <Baby /> {item.childrenAmount} tarbiyalanovchi
            </div>
            <div>
              <TimeBack /> Qabul qilingan: {item.date}
            </div>
            <div>
              <Wallet /> Maosh: ${item.salary}
            </div>
            <div>
              <IdCard />
              {item.role}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Teachers
