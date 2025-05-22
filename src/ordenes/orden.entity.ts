import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, ManyToMany, JoinTable, CreateDateColumn
} from 'typeorm';
import { Cliente } from 'src/clientes/cliente.entity';
import { Producto } from 'src/productos/producto.entity';

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
