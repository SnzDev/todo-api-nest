import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ICreateUser, IUpdateUser } from './dto/types';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  users = this.prismaService.users;
  async create(data: ICreateUser) {
    const response = await this.users.create({ data });
    return response;
  }

  async findAll() {
    const response = await this.users.findMany();
    return response;
  }

  async findOne(id: string) {
    const response = await this.users.findFirst({ where: { id } });
    return response;
  }
  async findByEmail(email: string) {
    const response = await this.users.findFirst({ where: { email } });
    return response;
  }

  async update(id: string, data: IUpdateUser) {
    const response = await this.users.update({ data, where: { id } });
    return response;
  }

  async remove(id: string) {
    const response = await this.users.update({
      data: { active: false },
      where: { id },
    });
    return response;
  }
}
