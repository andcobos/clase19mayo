import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UsePipes
} from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createComentarioDto: CreateComentarioDto) {
    return this.comentariosService.create(createComentarioDto);
  }

  @Get()
  findAll() {
    return this.comentariosService.findAll();
  }

  @Get('producto/:productoId')
  findByProducto(@Param('productoId', ParseIntPipe) productoId: number) {
    return this.comentariosService.findByProducto(productoId);
  }

  @Get('producto/:productoId/promedio')
  getPromedioProducto(@Param('productoId', ParseIntPipe) productoId: number) {
    return this.comentariosService.getPromedioProducto(productoId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.comentariosService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateComentarioDto: UpdateComentarioDto
  ) {
    return this.comentariosService.update(id, updateComentarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.comentariosService.remove(id);
  }
}