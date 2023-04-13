import { Test, TestingModule } from '@nestjs/testing';
import { TakesController } from './takes.controller';
import { TakesService } from './takes.service';

describe('TakesController', () => {
  let controller: TakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TakesController],
      providers: [TakesService],
    }).compile();

    controller = module.get<TakesController>(TakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
