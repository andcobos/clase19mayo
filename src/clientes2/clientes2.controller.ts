import { Controller, Post, Body } from '@nestjs/common';
import { Clientes2Service } from './clientes2.service';
import { CreateCliente2Dto } from './dto/create-cliente2.dto';
import { Cliente2 } from './cliente2.entity';

@Controller('clientes2')
export class Clientes2Controller {
  constructor(private readonly clientes2Service: Clientes2Service) {}

  @Post()
  create(@Body() dto: CreateCliente2Dto): Promise<Cliente2> {
    return this.clientes2Service.create(dto);
  }
}
