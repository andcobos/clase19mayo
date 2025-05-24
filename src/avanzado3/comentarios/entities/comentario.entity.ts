import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { IsString, IsInt, Min, Max, MaxLength, IsNotEmpty } from 'class-validator';
import { Producto } from './producto.entity';

@Entity('comentarios')
export class Comentario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  @IsString({ message: 'El comentario debe ser un texto' })
  @IsNotEmpty({ message: 'El comentario no puede estar vacío' })
  @MaxLength(200, { message: 'El comentario no puede superar los 200 caracteres' })
  texto: string;

  @Column({ type: 'int' })
  @IsInt({ message: 'El puntaje debe ser un número entero' })
  @Min(1, { message: 'El puntaje mínimo es 1' })
  @Max(5, { message: 'El puntaje máximo es 5' })
  puntaje: number;

  @Column({ type: 'varchar', length: 100 })
  @IsString({ message: 'El nombre del usuario debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre del usuario es requerido' })
  usuario: string;

  @CreateDateColumn()
  fechaCreacion: Date;

  @ManyToOne(() => Producto, producto => producto.comentarios)
  producto: Producto;

  @Column()
  productoId: number;
}