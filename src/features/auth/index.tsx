import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { LoginForm } from './components/login-form'

export const Login = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="px-4 py-10">
        <CardHeader>
          <CardTitle className="text-4xl flex justify-between">
            Login
            <Image
              src="/assets/logo-full.svg"
              alt="kamalak Logo"
              width={185}
              height={40}
            />
          </CardTitle>
          <CardDescription className="text-2xl">to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
