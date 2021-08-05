import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTimeReportDto } from './dto/create-time-report.dto';
import { UpdateTimeReportDto } from './dto/update-time-report.dto';
import { TimeReport } from './entities';

@Injectable()
export class TimeReportService {

  constructor(
    @InjectRepository(TimeReport)
    private readonly timeReportRepository : Repository<TimeReport>
  ){}

  async create(dto: CreateTimeReportDto) {
    const newTimeReprt = this.timeReportRepository.create(dto)
    const timeReport =  await this.timeReportRepository.save(newTimeReprt)
     return timeReport;
  }

  findAll() {
    return `This action returns all timeReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeReport`;
  }

  update(id: number, updateTimeReportDto: UpdateTimeReportDto) {
    return `This action updates a #${id} timeReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeReport`;
  }
}
