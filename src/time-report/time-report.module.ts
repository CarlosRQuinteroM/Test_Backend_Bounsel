import { Module } from '@nestjs/common';
import { TimeReportService } from './time-report.service';
import { TimeReportController } from './time-report.controller';

@Module({
  controllers: [TimeReportController],
  providers: [TimeReportService]
})
export class TimeReportModule {}
