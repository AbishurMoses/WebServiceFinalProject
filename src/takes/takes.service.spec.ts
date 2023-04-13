import { Test, TestingModule } from '@nestjs/testing';
import { TakesService } from './takes.service';

describe('TakesService', () => {
  let service: TakesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TakesService],
    }).compile();

    service = module.get<TakesService>(TakesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
