import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities';

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
      return await this.userRepository.save(newUser)
      // delete user.password;
      //  return user;
  }

   async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id)
    if(!user) throw new NotFoundException('User Not Found')
    return `This action returns a #${user.id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
