import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './ordenes/orden.entity';
import { Cliente } from './clientes/cliente.entity';
import { Producto } from './productos/producto.entity';
import { ProductosModule } from './productos/productos.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { ClientesModule } from './clientes/clientes.module';
import { Clientes2Module } from './clientes2/clientes2.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      // Poner su contraseña y el nombre de la bd
      password: 'conraseña',
      database: 'nombre_base_datos',
      entities: [Orden, Cliente, Producto],
      synchronize: true,
    }),
    OrdenesModule,
    ClientesModule,
    ProductosModule,
    Clientes2Module,
  ],
})
export class AppModule {}
