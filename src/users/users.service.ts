import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.find({email}).exec();;
  }
}

function InjectModel(name: any): (target: typeof UsersService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}
