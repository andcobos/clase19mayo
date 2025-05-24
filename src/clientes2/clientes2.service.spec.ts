import { Test, TestingModule } from '@nestjs/testing';
import { Clientes2Service } from './clientes2.service';

describe('Clientes2Service', () => {
  let service: Clientes2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Clientes2Service],
    }).compile();

    service = module.get<Clientes2Service>(Clientes2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
