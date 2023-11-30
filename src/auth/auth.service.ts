import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.schema';
import { CreateUserDto } from 'src/users/createUserDto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private user: User
  ) {}

  async signIn(createUserDto: CreateUserDto) {
    // const user = await this.usersService.findOne({
    //   'email': createUserDto.email,
    //   password: '',
    //   login: ''
    // });

    // if (!user?.password) {
    //   throw new UnauthorizedException();
    // }
    // const payload = { sub: user.email, username: user.password };
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    // };
  }
}