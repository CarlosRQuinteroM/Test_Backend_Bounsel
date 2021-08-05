import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { CreateTimeReportDto } from './dto/create-time-report.dto';
import { UpdateTimeReportDto } from './dto/update-time-report.dto';
import { Auth } from 'src/common/decorators';

@Controller('time-report')
export class TimeReportController {
  constructor(private readonly timeReportService: TimeReportService) {}
  
  @Auth()
  @Post()
  create(@Body() createTimeReportDto: CreateTimeReportDto) {
    return this.timeReportService.create(createTimeReportDto);
  }
  @Auth()
  @Get()
  findAll() {
    return this.timeReportService.findAll();
  }
  @Auth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeReportService.findOne(+id);
  }
  @Auth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeReportDto: UpdateTimeReportDto) {
    return this.timeReportService.update(+id, updateTimeReportDto);
  }
  @Auth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeReportService.remove(+id);
  }
}
