import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,
    ) {}

    async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
        const emailExistente = await this.clienteRepository.findOne({
            where: { email: createClienteDto.email }
        });

        if (emailExistente) {
            throw new ConflictException('El email ya está registrado');
        }

        const cliente = this.clienteRepository.create(createClienteDto);
        return await this.clienteRepository.save(cliente);
    }

    async findAll(): Promise<Cliente[]> {
        return await this.clienteRepository.find();
    }

    async findOne(id: number): Promise<Cliente> {
        const cliente = await this.clienteRepository.findOne({
            where: { id }
        });

        if (!cliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }

        return cliente;
    }

    async update(id: number, updateData: any): Promise<Cliente> {
        await this.clienteRepository.update(id, updateData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        const cliente = await this.findOne(id);
        await this.clienteRepository.remove(cliente);
    }
}