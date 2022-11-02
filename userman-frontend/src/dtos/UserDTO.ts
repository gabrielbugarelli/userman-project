import { Address } from "../entities/Address";

export class UserDto {
  name?: string;
  age?: number;
  email?: string;
  address?: Address;
}