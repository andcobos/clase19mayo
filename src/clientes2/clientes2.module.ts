import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente2 } from './cliente2.entity';
import { Clientes2Service } from './clientes2.service';
import { Clientes2Controller } from './clientes2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente2])],
  providers: [Clientes2Service],
  controllers: [Clientes2Controller],
})
export class Clientes2Module {}
