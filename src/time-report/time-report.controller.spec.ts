import { Test, TestingModule } from '@nestjs/testing';
import { TimeReportController } from './time-report.controller';
import { TimeReportService } from './time-report.service';

describe('TimeReportController', () => {
  let controller: TimeReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeReportController],
      providers: [TimeReportService],
    }).compile();

    controller = module.get<TimeReportController>(TimeReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
