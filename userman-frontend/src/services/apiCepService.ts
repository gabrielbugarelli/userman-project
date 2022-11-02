import axios from "axios";
import { Address } from "../entities/Address";

const url = import.meta.env.VITE_VIACEP_URL;

export async function getAddresByCep(cep: number): Promise<Address>{
  const { data } = await axios.get(`${url}/ws/${cep}/json/`);

  let address: Address = {
    cep: data.cep,
    public_place: data.logradouro,
    complement: data.complemento,
    district: data.bairro,
    locality: data.localidade,
    uf: data.uf
  }

  return address;
}