import { TableContainer, Td, Tr } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Main = styled(TableContainer)`
  width: 100%;
  background-color: var(--gray-800);
  border-radius: 8px;
  padding: 0.5rem;
`

export const TableData = styled(Td)`
  padding: 0.5rem;
  border-radius: 4px;
  background-color: var(--gray-700);
`