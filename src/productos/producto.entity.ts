import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Orden } from 'src/ordenes/orden.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal')
  precio: number;

  @ManyToMany(() => Orden, orden => orden.productos)
  ordenes: Orden[];
}
