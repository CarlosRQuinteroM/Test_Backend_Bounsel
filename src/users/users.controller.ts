import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Users routes")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const data = await this.usersService.create(createUserDto);
    return{mesage:`User created`, data}
  }
  
  @Auth()
  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return {data};
  }
  @Auth()
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.usersService.findOne(id);
    return {data};
  }
  @Auth()
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return  await this.usersService.update(+id, updateUserDto);
  }
  @Auth()
  @Delete(':id')
  async  deleteOne(@Param('id') id: number) {
    const  data = await this.usersService.deleteOne(id)
    return {message:"User Deleted", data}
  }
}
