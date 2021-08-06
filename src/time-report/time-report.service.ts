import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities';
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

  async create(dto: CreateTimeReportDto, user:User) {
    const newTimeReprt = this.timeReportRepository.create({...dto, user})
    const timeReport =  await this.timeReportRepository.save(newTimeReprt)
     return timeReport;
  }

 async findAll() {
    return await this.timeReportRepository.find() ;
  }

  async findOne(user_id): Promise<TimeReport[]> {
    return await this.timeReportRepository.find({
      where:{
         user : user_id
      },
      relations:['user']
    })
    
  }

  update(id: number, updateTimeReportDto: UpdateTimeReportDto) {
    return `This action updates a #${id} timeReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeReport`;
  }
}
