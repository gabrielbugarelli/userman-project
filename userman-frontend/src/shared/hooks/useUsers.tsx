import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "../../entities/User";
import { getUsers } from "../../services/usersService";

type UsersProviderType = {
  children: ReactNode
}

type UsersContextData = {
  getAllUsers: () => Promise<void>;
  users: User[]
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData)

export const UsersProvider = ({children}: UsersProviderType) => {
  const [ users, setUsers ] = useState<User[]>([])
  
  async function getAllUsers() {
    const response = await getUsers(); 
    setUsers(response)
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <UsersContext.Provider value={{users, getAllUsers}}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsers = () => {
  const data = useContext(UsersContext);
  return data;
}