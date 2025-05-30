import { Test, TestingModule } from '@nestjs/testing';
import { OrdenService } from './ordenes.service';

describe('OrdenesService', () => {
  let service: OrdenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenService],
    }).compile();

    service = module.get<OrdenService>(OrdenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
