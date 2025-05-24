import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './avanzado1/ordenes/orden.entity';
import { Cliente } from './avanzado1/clientes/cliente.entity';
import { Producto } from './avanzado1/productos/producto.entity';
import { ProductosModule } from './avanzado1/productos/productos.module';
import { ComentariosModule } from './avanzado3/comentarios/comentarios.module';
import { ProductosModule } from './avanzado3/productos/productos.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { Clientes2Module } from './clientes2/clientes2.module';
import { ComentariosModule } from './avanzado3/comentarios/comentarios.module';
import { ProductosModule } from './avanzado3/productos/productos.module';
import { ProductoModule } from './intermedio/producto/producto.module';
import { ClienteModule } from './intermedio/cliente/cliente.module';


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
    ClienteModule,
    ProductosModule,
    Clientes2Module,
    ComentariosModule,
    ProductoModule,
    ClienteModule,
  ],
})
export class AppModule {}
