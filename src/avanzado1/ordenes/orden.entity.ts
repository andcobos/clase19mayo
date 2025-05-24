import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, ManyToMany, JoinTable, CreateDateColumn
} from 'typeorm';
import { Cliente } from 'src/avanzado1/clientes/cliente.entity';
import { Producto } from 'src/avanzado1/productos/producto.entity';

@Entity()
export class Orden {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  fechaCreacion: Date;

  @ManyToOne(() => Cliente, cliente => cliente.ordenes)
  cliente: Cliente;

  @ManyToMany(() => Producto)
  @JoinTable()
  productos: Producto[];

  @Column('decimal')
  montoTotal: number;
}
