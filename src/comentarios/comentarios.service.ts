import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './entities/comentario.entity';
import { Producto } from './entities/producto.entity';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(createComentarioDto: CreateComentarioDto): Promise<Comentario> {
    // Verificar que el producto existe
    const producto = await this.productoRepository.findOne({
      where: { id: createComentarioDto.productoId }
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${createComentarioDto.productoId} no encontrado`);
    }

    const comentario = this.comentarioRepository.create(createComentarioDto);
    return await this.comentarioRepository.save(comentario);
  }

  async findAll(): Promise<Comentario[]> {
    return await this.comentarioRepository.find({
      relations: ['producto']
    });
  }

  async findByProducto(productoId: number): Promise<Comentario[]> {
    return await this.comentarioRepository.find({
      where: { productoId },
      relations: ['producto'],
      order: { fechaCreacion: 'DESC' }
    });
  }

  async findOne(id: number): Promise<Comentario> {
    const comentario = await this.comentarioRepository.findOne({
      where: { id },
      relations: ['producto']
    });

    if (!comentario) {
      throw new NotFoundException(`Comentario con ID ${id} no encontrado`);
    }

    return comentario;
  }

  async update(id: number, updateComentarioDto: UpdateComentarioDto): Promise<Comentario> {
    const comentario = await this.findOne(id);

    if (updateComentarioDto.productoId && updateComentarioDto.productoId !== comentario.productoId) {
      const producto = await this.productoRepository.findOne({
        where: { id: updateComentarioDto.productoId }
      });

      if (!producto) {
        throw new NotFoundException(`Producto con ID ${updateComentarioDto.productoId} no encontrado`);
      }
    }

    Object.assign(comentario, updateComentarioDto);
    return await this.comentarioRepository.save(comentario);
  }

  async remove(id: number): Promise<void> {
    const comentario = await this.findOne(id);
    await this.comentarioRepository.remove(comentario);
  }

  async getPromedioProducto(productoId: number): Promise<number> {
    const result = await this.comentarioRepository
      .createQueryBuilder('comentario')
      .select('AVG(comentario.puntaje)', 'promedio')
      .where('comentario.productoId = :productoId', { productoId })
      .getRawOne();

    return result.promedio ? parseFloat(result.promedio) : 0;
  }
}
