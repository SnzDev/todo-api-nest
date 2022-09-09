import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException();

    const matchPassword = await bcrypt.compare(pass, user.password);

    if (!matchPassword) throw new UnauthorizedException();

    const { password, ...result } = user;

    return result;
  }
}
