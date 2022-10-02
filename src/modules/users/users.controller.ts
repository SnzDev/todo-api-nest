import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ICreateUser, IUpdateUser } from './dto/types';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from '../../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.user);
  }

  @Post()
  async create(@Body() data: ICreateUser) {
    const existsEmail = await this.usersService.findByEmail(data.email);
    if (existsEmail)
      throw new HttpException('Email already exists!', HttpStatus.BAD_REQUEST);

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(data.password, salt);

    await this.usersService.create({ ...data, password: hash });
    return;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: IUpdateUser) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
