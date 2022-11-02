import { Button, useDisclosure } from "@chakra-ui/react"
import { AddressBook } from "phosphor-react"
import { Modal } from "../../shared/components/Modal"
import { UserTable } from "../../shared/components/Table"
import { Container } from "./styles"

export const Home: React.FC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <Container>
      <header className="header-container">
        <h1>Users Management</h1>

        <Button onClick={onOpen}> 
          Add new user 
          <AddressBook size={32} weight="regular" />
        </Button>
      </header>

      <Modal isOpen={isOpen} onClose={onClose}>
        Add User
      </Modal>

      <UserTable />
    </Container>
  )
}