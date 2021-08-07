import { Module } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { TimeReportController } from './time-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeReport } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([TimeReport])],
  controllers: [TimeReportController],
  providers: [TimeReportService]
})
export class TimeReportModule {}
