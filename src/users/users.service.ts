import { Injectable } from '@nestjs/common';
import { User } from './users.schema';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.find(user: User => user.email === email).exec();;
  }
}

function InjectModel(name: any): (target: typeof UsersService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}
