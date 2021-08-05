import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities';

export interface UserFindOne {
  id?: number;
  email?:string;
}
@Injectable()
export class UsersService {
  constructor( 
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
    ){}

    async create(dto: CreateUserDto) {
      // This function checks if there are already users with this email in the database
      const userExist = await this.userRepository.findOne({email: dto.email});
      if (userExist) throw new BadRequestException(`User already Exists with this email:${userExist.email}`)
      // Here The User ist Created.
      const newUser = this.userRepository.create(dto)
      // delete the password from the database response
      const user =  await this.userRepository.save(newUser)
      delete user.password;
       return user;
  }

   async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id)
    if(!user) throw new NotFoundException('User Not Found')
    return user;
  }
// find User By Emails
  async findByEmail(data : UserFindOne){
    return await this.userRepository
    .createQueryBuilder('user')
    .where(data)
    .addSelect('user.password')
    .getOne()
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id)
    //Here we check that the user exists
    if (!user) throw new NotFoundException(`User dont exist or unautorized`);
    //we edit the user
    const editUser = Object.assign(user, updateUserDto);
    return await this.userRepository.save(editUser);
  }

  async deleteOne(id: number) {
    const user = await this.findOne(id)
    return await this.userRepository.remove(user);
  }
}
