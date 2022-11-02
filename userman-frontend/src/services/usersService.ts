import axios from "axios";
import { UserDto } from "../dtos/UserDTO";
import { User } from "../entities/User";

const url = import.meta.env.VITE_BASE_URL_API;

export const createUser = async (user: UserDto) => {
  await axios.post(`${url}/users`, user);
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(`${url}/users`);
  return data;
}