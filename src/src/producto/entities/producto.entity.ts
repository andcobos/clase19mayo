import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsPositive, Min, MaxLength } from 'class-validator';

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    nombre: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    @IsPositive({ message: 'El precio debe ser mayor a 0' })
    precio: number;

    @Column({ type: 'int', nullable: false })
    @Min(0, { message: 'El stock debe ser un número entero positivo' })
    stock: number;

    @Column({ type: 'text', nullable: true })
    descripcion?: string;

    @Column({ type: 'boolean', default: true })
    activo: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;

    constructor(nombre?: string, precio?: number, stock?: number) {
        if (nombre) this.nombre = nombre;
        if (precio) this.precio = precio;
        if (stock !== undefined) this.stock = stock;
    }
}