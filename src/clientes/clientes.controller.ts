import { Controller, Post, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('clientes')
export class ClientesController {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepo: Repository<Cliente>,
  ) {}

  @Post()
  async crear(@Body() body: { nombre: string }): Promise<Cliente> {
    const cliente = this.clienteRepo.create(body);
    return this.clienteRepo.save(cliente);
  }
}
