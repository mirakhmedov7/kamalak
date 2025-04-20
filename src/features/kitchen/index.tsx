import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Kitchen = () => {
  const kitchenCount = 7
  return (
    <div className="grid grid-cols-3 gap-4 mb-12">
      {new Array(kitchenCount).fill(0).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <Image
              src="/assets/food.png"
              width={300}
              height={180}
              alt="Food"
              className="mx-auto"
            />
          </CardHeader>
          <CardContent className="mx-auto text-center">
            <p className="text-lg text-grey font-medium">Qisqacha malumot</p>
            <CardTitle className="font-bold text-2xl">
              Umumiy taom nomi
            </CardTitle>
          </CardContent>
          <CardFooter className="flex justify-between w-full gap-2">
            <Button
              variant="success"
              className="text-xl w-full shrink border-2"
              size={'lg'}
            >
              Tanlash
            </Button>
            <Button variant="danger" size={'lg'} className="border-2">
              <Trash />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Kitchen
