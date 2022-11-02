import { Address } from "@prisma/client"

export class User {
  id?: string
  address: Address
  name: string
  age: number
  email: string
  created_a?: Date
}