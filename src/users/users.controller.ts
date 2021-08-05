import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const data = await this.usersService.create(createUserDto);
    return{mesage:`User created`, data}
  }

  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return {data};
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.usersService.findOne(id);
    return {data};
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return  await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async  deleteOne(@Param('id') id: number) {
    const  data = await this.usersService.deleteOne(id)
    return {message:"User Deleted", data}
  }
}
