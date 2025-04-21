import React from 'react'
import { foodSchedule } from '@/constants/food-shedule'
import { Badge } from '@/components/ui/badge'

const FoodSchedule = () => {
  return (
    <div className="bg-white px-5 rounded-2xl mb-10">
      <h1 className="font-semibold py-5 text-lg">Umumiy taom nomi</h1>
      <ul className="">
        {foodSchedule.map((item) => (
          <li
            key={item.id}
            className="flex gap-2 border-[#EEEEEE] last:border-0 border-b py-2 flex-col"
          >
            <div className="flex gap-7">
              <h3 className="text-grey font-medium">{item.name}</h3>
              <Badge variant={'success'}>{item.status}</Badge>
            </div>
            <div className="flex gap-7">
              <p className="text-yellow">{item.timePeriod}</p>
              <p className="text-grey">{item.foodTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FoodSchedule
