import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../modules/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUserCredentials(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (!user || !(await bcrypt.compare(pass, user.password)))
      throw new UnauthorizedException();

    const { password, ...result } = user;
    return result;
  }

  async loginWithCredentials(user: any) {
    const payload = {
      email: user.email,
      id: user.id,
    };

    return {
      user,
      token: this.jwtTokenService.sign(payload, {
        secret: process.env.JWT_SECRET_KEY,
      }),
    };
  }
}
