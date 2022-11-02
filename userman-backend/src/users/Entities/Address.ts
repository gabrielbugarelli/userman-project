import { ApiProperty } from "@nestjs/swagger"

export class Address {
  id?: string

  @ApiProperty()
  cep: string
  
  @ApiProperty()
  public_place: string

  @ApiProperty()
  complement: string

  @ApiProperty()
  district: string

  @ApiProperty()
  locality: string

  created_at?: Date

  @ApiProperty()
  uf: string
}