import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Orden } from 'src/ordenes/orden.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Orden, orden => orden.cliente)
  ordenes: Orden[];
}
