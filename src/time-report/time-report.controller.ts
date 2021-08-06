import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { CreateTimeReportDto } from './dto/create-time-report.dto';
import { UpdateTimeReportDto } from './dto/update-time-report.dto';
import {  Auth, User } from 'src/common/decorators';
import { User as UserEntity } from '../users/entities/user.entity';

@Controller('time-reports')
export class TimeReportController {
  constructor(private readonly timeReportService: TimeReportService) {}

  @Auth()
  @Post('/create')
  async createTimeReport(@Body() dto: CreateTimeReportDto, @User() user: UserEntity) {
    const data = await this.timeReportService.create(dto, user)
    return { message: 'Post created', data };
  }

  @Get('find')
  async findAll() {
    const data = await this.timeReportService.findAll();
    return data;
  }

  @Auth()
  @Get('findone/:id')
  async findOne(@Param('id') id: number) {
    const data = await this.timeReportService.findOne(id);
    return data;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTimeReportDto: UpdateTimeReportDto) {
    return await this.timeReportService.update(id, updateTimeReportDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.timeReportService.remove(+id);
  }
}
