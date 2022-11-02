import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { User } from '../../../entities/User';
import { getUsers } from '../../../services/usersService';

import { Main, TableData } from './styles'

export const UserTable: React.FC = () => {
  const [ users, setUsers ] = useState<User[]>([])

  const listAllUsers = async () => {
    const response = await getUsers(); 
    setUsers(response)
  }

  useEffect(() => {
    listAllUsers();
  }, []);

  return (
    <Main>
      <Table width="100%">
        <Thead >
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Email</Th>
            <Th>Created At</Th>
          </Tr>
        </Thead>
        <Tbody marginBottom='5rem'>
          {
            users.map(user => {
              return (
                <Tr key={user.id}>
                  <TableData align='center'>{user.name}</TableData>
                  <TableData align='center'>{user.age}</TableData>
                  <TableData align='center'>{user.email}</TableData>
                  <TableData align='center'>{
                    Intl
                    .DateTimeFormat('pt-br', { day: '2-digit', month: '2-digit', year: '2-digit' })
                    .format(new Date(String(user.created_at)))
                  }</TableData>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </Main>
  )
}