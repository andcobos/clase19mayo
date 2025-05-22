import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orden } from './orden.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/clientes/cliente.entity';
import { Producto } from 'src/productos/producto.entity';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden) private ordenRepo: Repository<Orden>,
    @InjectRepository(Cliente) private clienteRepo: Repository<Cliente>,
    @InjectRepository(Producto) private productoRepo: Repository<Producto>,
  ) {}

  async crearOrden(clienteId: number, productoIds: number[]): Promise<Orden> {
    const cliente = await this.clienteRepo.findOneBy({ id: clienteId });
    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }

    if (!productoIds || productoIds.length < 1) {
      throw new Error('Debe agregar al menos un producto');
    }

    const productos = await this.productoRepo.findByIds(productoIds);

    if (productos.length < 1) {
      throw new Error('No se encontraron productos válidos');
    }

    const montoTotal = productos.reduce((sum, p) => sum + Number(p.precio), 0);

    const orden = this.ordenRepo.create({
      cliente,
      productos,
      montoTotal
    });

    return this.ordenRepo.save(orden);
  }
}
