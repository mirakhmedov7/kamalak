import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  variant: 'active' | 'inactive'
}

const CustomButton = ({ children, variant, ...props }: Props) => {
  return (
    <Button
      className={cn(
        variant == 'active'
          ? 'bg-green-background text-green border-green border-1 hover:bg-green-background '
          : 'bg-red-background text-red border-red border-1 hover:bg-red-background',
        'cursor-pointer active:scale-95'
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

export default CustomButton
