import { Test, TestingModule } from '@nestjs/testing';
import { Clientes2Controller } from './clientes2.controller';

describe('Clientes2Controller', () => {
  let controller: Clientes2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Clientes2Controller],
    }).compile();

    controller = module.get<Clientes2Controller>(Clientes2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
