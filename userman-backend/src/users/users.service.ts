import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dtos/user-dto';

@Injectable()
export class UsersService {
  private repository: PrismaService;

  constructor(repository: PrismaService) {
    this.repository = repository;
  }

  async create(userDto: UserDto): Promise<User> {
    const { name, age, email, address } = userDto;

    const user = await this.repository.user.create({
      data: {
        name,
        age,
        email,
        address: {
          create: address
        }
      }
    });
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.repository.user.findMany({
      include: {
        address: true
      }
    });
    return users;
  }

  async delete(id: string): Promise<void> {
    const user = await this.repository.user.findUnique({
      where: {
        id
      },
      include: {
        address: true
      }
    });

    if(!user) {
      throw new NotFoundException("User does not exists")
    }
    
    await this.repository.user.delete({
      where: {
        id
      },
      include: {
        address: {
          include: {
            user: true
          }
        }
      }
    })

  }
}
