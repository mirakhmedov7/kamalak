import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
import Link from 'next/link'

const Menu = () => {
  const kitchenCount = 7
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(284px,_1fr))]  gap-4 mb-12">
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
              size={'lg'}
              className="text-xl w-full shrink border-2"
              asChild
            >
              <Link href={`/menu/${(index + 1).toString()}`}>Tanlash</Link>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="danger" size={'lg'} className="border-2">
                  <Trash />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[400px]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-3xl">
                    Ogohlantirish
                  </AlertDialogTitle>
                  <p className="text-yellow text-xl">Diqqat bilan o'qing!!!</p>
                  <AlertDialogDescription className="text-xl">
                    Rostan ham shu taomnomani ochirmoqchimisiz?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-start [&>button]:w-[175px] [&>button]:text-xl [&>button]:py-5">
                  <AlertDialogAction className="bg-red-background text-red border-red border-1 hover:bg-red-background cursor-pointer active:scale-95">
                    Ha
                  </AlertDialogAction>
                  <AlertDialogCancel className="bg-green-background text-green border-green border-1 hover:bg-green-background cursor-pointer active:scale-95 hover:text-green">
                    Bekor qilish
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Menu
