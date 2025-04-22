'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DialogFooter } from '@/components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../form-schema'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
// import { DatePicker } from '@/components/date-picker'

const TeacherForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      salary: 0,
      group: '',
      birthDate: '',
      receivedDate: '',
      phoneNumber: '',
      nationality: '',
      passport: '',
      passportID: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 grid grid-cols-2 gap-x-10"
        >
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ism, familya, sharf"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@domain.com"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="12345678"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="12345678"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Salary Field */}
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">Salary</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="$100"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Group Field */}
          <FormField
            control={form.control}
            name="group"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">Group</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Group A"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Birth Date Field */}
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Birth Date
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
                {/* <DatePicker /> */}
              </FormItem>
            )}
          />

          {/* Received Date Field */}
          <FormField
            control={form.control}
            name="receivedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Received Date
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+123456789012"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nationality Field */}
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Nationality
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nationality"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Passport Field */}
          <FormField
            control={form.control}
            name="passport"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Passport
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Passport Number"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Passport ID Field */}
          <FormField
            control={form.control}
            name="passportID"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal">
                  Passport ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Passport ID"
                    {...field}
                    className="p-5 bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Upload Field */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-base font-normal">Image</FormLabel>
                <div className="bg-red"></div>
                <FormControl className="bg-red">
                  <Input
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    className="bg-[#F9FBFF] text-base placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter className="w-full col-span-2">
            <Button
              type="submit"
              variant="danger"
              size={'lg'}
              className="text-xl border-2 w-full"
            >
              O’zgartirish
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                variant="success"
                size={'lg'}
                className="text-xl border-2 w-full"
              >
                Bekor qilish
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </Form>
    </div>
  )
}

export default TeacherForm
