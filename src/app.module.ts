import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './ordenes/orden.entity';
import { Cliente } from './clientes/cliente.entity';
import { Producto } from './productos/producto.entity';
import { ProductosModule } from './productos/productos.module';
import { ComentariosModule } from './avanzado3/comentarios/comentarios.module';
import { ProductosModule } from './productos/productos.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { ClientesModule } from './clientes/clientes.module';
import { ComentariosModule } from './avanzado3/comentarios/comentarios.module';
import { ProductosModule } from './productos/productos.module';

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
    Clientes2Module,
    ComentariosModule,
  ],
})
export class AppModule {}
