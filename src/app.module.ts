import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './avanzado1/ordenes/orden.entity';
import { Cliente } from './avanzado1/clientes/cliente.entity';
import { Producto } from './avanzado1/productos/producto.entity';
import { ProductosModule } from './avanzado1/productos/productos.module';
import { OrdenesModule } from './avanzado1/ordenes/ordenes.module';
import { ClientesModule } from './avanzado1/clientes/clientes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      // Poner su contraseña y el nombre de la bd
      password: 'Colita2010',
      database: 'clase19mayo',
      entities: [Orden, Cliente, Producto],
      synchronize: true,
    }),
    OrdenesModule,
    ClientesModule,
    ProductosModule,
  ],
})
export class AppModule {}
