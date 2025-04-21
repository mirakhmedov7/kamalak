import { z } from 'zod'

export const formSchema = z
  .object({
    name: z.string().min(3, {
      message: 'Name must be at least 3 characters.',
    }),
    email: z
      .string()
      .min(3, { message: 'Email must be at least 3 characters.' })
      .email({ message: 'Enter a valid email' }),
    password: z
      .string()
      .min(8, {
        message: 'Password must be at least 8 characters.',
      })
      .transform((value) => value.toLowerCase()),
    confirmPassword: z
      .string()
      .min(8, { message: 'Name must be at least 8 characters.' }),
    salary: z.number().min(100, {
      message: 'Salary must be at least $100.',
    }),
    group: z
      .string()
      .min(3, { message: 'Group must be at least 3 characters.' }),
    birthDate: z.string().refine(
      (date) => {
        const parsedDate = new Date(date)
        if (isNaN(parsedDate.getTime())) return false

        const today = new Date()
        const ageDiff = today.getFullYear() - parsedDate.getFullYear()
        const monthDiff = today.getMonth() - parsedDate.getMonth()
        const dayDiff = today.getDate() - parsedDate.getDate()

        const is18OrOlder =
          ageDiff > 18 ||
          (ageDiff === 18 &&
            (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))

        return is18OrOlder
      },
      {
        message: 'You must be at least 18 years old with a valid birth date.',
      }
    ),
    receivedDate: z.string().refine(
      (date) => {
        const parsedDate = new Date(date)
        const today = new Date()

        // Normalize both dates to ignore the time part
        parsedDate.setHours(0, 0, 0, 0)
        today.setHours(0, 0, 0, 0)

        return !isNaN(parsedDate.getTime()) && parsedDate <= today
      },
      {
        message: 'Received date must be a valid date and not in the future.',
      }
    ),
    phoneNumber: z.string().length(13),
    nationality: z.string().regex(/^[A-Za-z\s]+$/, {
      message: 'Nationality must contain only letters and spaces.',
    }),
    passport: z
      .string()
      .min(9, { message: 'Passport must be at least 9 characters.' }),
    passportID: z
      .string()
      .length(14, { message: 'Passport ID must contain only 14 characters.' }),
    image: z
      .instanceof(File, {
        message: 'Please select an image file.',
      })
      .refine(
        (file) =>
          [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/svg+xml',
            'image/gif',
          ].includes(file.type),
        { message: 'Invalid image file type' }
      ),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword '],
  })
