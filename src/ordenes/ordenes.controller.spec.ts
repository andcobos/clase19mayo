import { Test, TestingModule } from '@nestjs/testing';
import { OrdenController } from './ordenes.controller';

describe('OrdenesController', () => {
  let controller: OrdenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenController],
    }).compile();

    controller = module.get<OrdenController>(OrdenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
