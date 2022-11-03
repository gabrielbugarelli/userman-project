import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useUsers } from '../../hooks/useUsers'

import { Main, TableData } from './styles'

export const UserTable: React.FC = () => {

  const { users, getAllUsers } = useUsers();

  useEffect(() => {
    getAllUsers()
  }, [])

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