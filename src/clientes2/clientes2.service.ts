import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente2 } from './cliente2.entity';
import { CreateCliente2Dto } from './dto/create-cliente2.dto';

@Injectable()
export class Clientes2Service {
  constructor(
    @InjectRepository(Cliente2)
    private clienteRepo: Repository<Cliente2>,
  ) {}

  async create(dto: CreateCliente2Dto): Promise<Cliente2> {
    const existing = await this.clienteRepo.findOneBy({ email: dto.email });
    if (existing) {
      throw new BadRequestException('El email ya está registrado');
    }

    const cliente = this.clienteRepo.create(dto);
    return this.clienteRepo.save(cliente);
  }
}
