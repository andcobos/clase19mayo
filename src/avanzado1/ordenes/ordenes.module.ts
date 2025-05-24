import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './orden.entity';
import { OrdenService } from './ordenes.service';
import { OrdenController } from './ordenes.controller';
import { Cliente } from 'src/avanzado1/clientes/cliente.entity';
import { Producto } from 'src/avanzado1/productos/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orden, Cliente, Producto])],
  controllers: [OrdenController],
  providers: [OrdenService]
})
export class OrdenesModule {}
