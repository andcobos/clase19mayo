import { Controller, Post, Body, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Controller('productos')
export class ProductosController {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepo: Repository<Producto>,
    ) { }

    @Post()
    async crear(@Body() body: { nombre: string; precio: number }): Promise<Producto> {
        const { nombre, precio } = body;

        if (!nombre || typeof nombre !== 'string') {
            throw new Error('El nombre es obligatorio');
        }

        if (typeof precio !== 'number' || precio <= 0) {
            throw new Error('El precio debe ser un número positivo');
        }

        const producto = this.productoRepo.create({ nombre, precio });
        return this.productoRepo.save(producto);
    }

}

