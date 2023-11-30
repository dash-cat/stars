import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './createUserDto';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(createUserDto: CreateUserDto) {
    return this.userModel.find({email: createUserDto.email}).exec();;
  }
}

