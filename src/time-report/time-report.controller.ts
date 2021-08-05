import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { CreateTimeReportDto } from './dto/create-time-report.dto';
import { UpdateTimeReportDto } from './dto/update-time-report.dto';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from '../users/entities/user.entity';

@Controller('time-reports')
export class TimeReportController {
  constructor(private readonly timeReportService: TimeReportService) {}

  @Post('/create')
  async create(@Body() dto: CreateTimeReportDto) {
    const data = await this.timeReportService.create(dto)
    return { message: 'Post created', data };
  }

  @Get()
  async findAll() {
    return await this.timeReportService.findAll();
  }

  @Get()
  async findOne(@Param('id') id: number) {
    return await this.timeReportService.findOne(id);
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
