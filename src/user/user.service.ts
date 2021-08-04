import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserRepository
  ) {}
  async getAll(): Promise<UserEntity[]> {
    const list = await this.userRepository.find();

    if (!list.length) {
      throw new NotFoundException({message: `no user found`});
    }
    return list;
  }

  async findById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException({
        message: `User with id: ${id}, does not exist. `,
      });
    }
    return user;
  }

  async findByEmail(email:string): Promise<UserEntity> {

    const mail = await this.userRepository.findOne({email: email});
    if (!mail) {
        throw new NotFoundException({
          message: `User with email: ${mail}, does not exist. `,
        });
      }
    return mail;
  }

  async create(dto: UserDto): Promise<any>{
      const user = this.userRepository.create(dto);
      await this.userRepository.save(user);
      return{message:`the users ${user.nombre} has been created successfully!`};
  }

  async delete(id: number):Promise<any>{
      const user = await this.findById(id);
      await this.userRepository.delete(user);
      return{message:`the users ${user.nombre} has been DELETE successfully!`};
  }


}
