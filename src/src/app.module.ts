
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { ClienteModule } from './cliente/cliente.module';
import { Producto } from './producto/entities/producto.entity';
import { Cliente } from './cliente/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5442, 
      username: 'postgres', 
      password: '', 
      database: 'apicurso', 
      entities: [Producto, Cliente],
      synchronize: true, 
      logging: true, 
    }),
    ProductoModule,
    ClienteModule,
  ],
})
export class AppModule {}
