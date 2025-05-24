import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { Comentario } from './entities/comentario.entity';
import { Producto } from './entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario, Producto])],
  controllers: [ComentariosController],
  providers: [ComentariosService],
  exports: [ComentariosService]
})
export class ComentariosModule {}