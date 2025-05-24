import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comentario } from '../../comentarios/entities/comentario.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @OneToMany(() => Comentario, comentario => comentario.producto)
  comentarios: Comentario[];
}