import { Button, Input, ModalContent, ModalFooter, ModalHeader, NumberInputField } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ModalContainer = styled(ModalContent)`
  display: flex;
  flex-direction: column;

  width: 55vw;
  height: auto;
  margin: 10vw auto;

  border-radius: 8px;
  padding: 2rem;

  background-color: var(--gray-800);

  & {
    @media(max-width: 720px) {
      width: 90vw;
    }
  }
`

export const Header = styled(ModalHeader)`
  color: var(--gray-200);
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const Footer = styled(ModalFooter)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`

export const ButtonSave = styled(Button)`
  padding: 0.5rem;
  width: 5rem;
  border-radius: 8px;

  background-color: var(--green-600);
  color: var(--gray-200);

  &:hover {
    background-color: var(--green-700);
  }
`
export const ButtonClose = styled(ButtonSave)`
  background-color: var(--red-500);
  color: var(--gray-200);

  &:hover {
    background-color: var(--red-600);
  }
`

export const InputText = styled.input`
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 100%;
  background-color: var(--gray-900);
  color: var(--gray-200);
`
