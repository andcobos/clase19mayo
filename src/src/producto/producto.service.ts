import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async create(productoData: any): Promise<Producto> {
   
    if (!productoData.nombre || productoData.nombre.trim().length === 0) {
      throw new BadRequestException('El nombre no puede estar vacío');
    }

    if (productoData.precio <= 0) {
      throw new BadRequestException('El precio debe ser mayor a 0');
    }

    if (productoData.stock < 0) {
      throw new BadRequestException('El stock debe ser un número entero positivo');
    }

   
    const nuevoProducto = {
      nombre: productoData.nombre.trim(),
      precio: Number(productoData.precio),
      stock: Number(productoData.stock),
      descripcion: productoData.descripcion || null,
      activo: productoData.activo !== undefined ? productoData.activo : true
    };

    const producto = this.productoRepository.create(nuevoProducto);
    return await this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { activo: true },
      order: { fechaCreacion: 'DESC' }
    });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({
      where: { id }
    });
    
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    
    return producto;
  }

  async update(id: number, updateData: any): Promise<Producto> {
    
    const producto = await this.findOne(id);

    
    if (updateData.nombre !== undefined) {
      if (!updateData.nombre || updateData.nombre.trim().length === 0) {
        throw new BadRequestException('El nombre no puede estar vacío');
      }
      updateData.nombre = updateData.nombre.trim();
    }

    if (updateData.precio !== undefined && updateData.precio <= 0) {
      throw new BadRequestException('El precio debe ser mayor a 0');
    }

    if (updateData.stock !== undefined && updateData.stock < 0) {
      throw new BadRequestException('El stock debe ser un número entero positivo');
    }

    await this.productoRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
  }
}