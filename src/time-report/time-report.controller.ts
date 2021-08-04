import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { CreateTimeReportDto } from './dto/create-time-report.dto';
import { UpdateTimeReportDto } from './dto/update-time-report.dto';

@Controller('time-report')
export class TimeReportController {
  constructor(private readonly timeReportService: TimeReportService) {}

  @Post()
  create(@Body() createTimeReportDto: CreateTimeReportDto) {
    return this.timeReportService.create(createTimeReportDto);
  }

  @Get()
  findAll() {
    return this.timeReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeReportDto: UpdateTimeReportDto) {
    return this.timeReportService.update(+id, updateTimeReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeReportService.remove(+id);
  }
}
