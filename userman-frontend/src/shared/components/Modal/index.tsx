import {
  Modal as ModalComponent,
  ModalProps,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { UserDto } from '../../../dtos/UserDTO';
import { Address } from '../../../entities/Address';
import { getAddresByCep } from '../../../services/apiCepService';
import { createUser } from '../../../services/usersService';
import { useUsers } from '../../hooks/useUsers';
import { ButtonClose, ButtonSave, Footer, Header, InputText, ModalContainer } from './styles'

export const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
  const { register, handleSubmit, reset } = useForm<UserDto>();
  const [ address, setAddress ] = useState<Address>({});
  const [ cep, setCep ] = useState<number>(0);
  const { getAllUsers } = useUsers();

  const handleSave: SubmitHandler<UserDto> = async (data) => {
    let payload: UserDto = {}

    if(address) {
      payload = {
        name: data.name,
        age: Number(data.age),
        email: data.email,
        address: {
          ...address
        }
      }

      await createUser(payload);
      toast.success('Usuário registrado com sucesso!!! 😀');
      reset();
      setAddress({})
      await getAllUsers();
      return
    }

    payload = {
      name: data.name,
      age: Number(data.age),
      email: data.email,
      address: {
        ...data.address
      }
    }

    await createUser(payload);
    toast.success('Usuário registrado com sucesso!!! 😀');
    await getAllUsers();
    reset()
  }

  const getCep = async () => {
    if(!cep || cep === undefined || cep < 7800000) {
      toast.warn('Por favor, insira um CEP válido! 😊', {
        
      })
      return;
    }

    const response = await getAddresByCep(Number(cep));
    setAddress(response)
  }

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <Header> {children} </Header>
        <form style={{width: '100%'}} onSubmit={handleSubmit(handleSave)}>
          <Grid
            templateColumns='repeat(6, 1fr)'
            gap={8}
            marginBottom={50}
          >
            <GridItem colSpan={3}>
              <InputText 
                {...register("name")} required minLength={8} 
                type="text" placeholder='Full name'
              />
            </GridItem>
            <GridItem colSpan={1}>
              <InputText 
                {...register("age")} 
                type="number" placeholder='Age'
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputText style={{width: '70%'}}
                {...register("address.cep")} required minLength={8}
                onChange={(e) => setCep(Number(e.target.value))} type="number" placeholder='CEP'
              />
              <ButtonSave onClick={getCep} style={{width: '25%', marginLeft: '5%'}}>
                <MagnifyingGlass size={21} weight="duotone" />
              </ButtonSave>
            </GridItem>
            <GridItem colSpan={6}>
              <InputText 
                {...register("email")} required
                type="email" placeholder='Email'
              />
            </GridItem>

            <GridItem colSpan={2}>
              <InputText 
                {...register("address.locality")} required 
                value={address.locality}  type="text" placeholder='Locality'
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputText 
                {...register("address.complement")}
                value={address.complement} type="text" placeholder='Complement'
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputText 
                {...register("address.district")} required 
                value={address.district} type="text" placeholder='District'
              />
            </GridItem>
            <GridItem colSpan={3}>
              <InputText 
                {...register("address.uf")} required 
                value={address.uf} type="text" placeholder='UF'
              />
            </GridItem>
            <GridItem colSpan={3}>
              <InputText 
                {...register("address.public_place")} required 
                value={address.public_place} type="text" placeholder='Public Place'
              />
            </GridItem>
          </Grid>

          <Footer>
            <ButtonClose onClick={onClose}> Close </ButtonClose>
            <ButtonSave type="submit"> Save </ButtonSave>
          </Footer>
        </form>
      </ModalContainer>
    </ModalComponent>
  )
}