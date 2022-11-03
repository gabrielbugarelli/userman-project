import { Body, Controller, Post, HttpCode, Res, Get, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Response } from 'express';
import { UserDto } from './dtos/user-dto';
import { UsersService } from './users.service';

@ApiTags("users")
@Controller('users')
export class UsersController {
  private userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  @Post()
  @HttpCode(201)
  async create(@Res() response: Response, @Body() userDto: UserDto) {
    const user = await this.userService.create(userDto);
    if(user) {
      return response.send({ created: true })
    }
  }

  @Get()
  @HttpCode(200)
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Delete(":id")
  @HttpCode(200)
  async delete(@Param("id") id: string): Promise<void> {
    await this.userService.delete(id);
  }
}
