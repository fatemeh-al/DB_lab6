import { Injectable } from '@nestjs/common';
import UserEntity from '../db/user.entity';
import CreateUserDto from './dto/createUser.dto';
import {getConnection} from "typeorm";

@Injectable()
export class UserServices {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const name = userDetails.name;
    const password = userDetails.password;
    userEntity.name = name;
    userEntity.password = password;
    await UserEntity.save(userEntity);
    return userEntity;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }

  async findOne(username: string): Promise<UserEntity | undefined> {
    return await UserEntity.findOne({where: {"name": username}});
  }
}