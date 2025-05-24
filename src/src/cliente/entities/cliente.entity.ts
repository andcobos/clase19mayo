import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

@Entity('clientes') 
export class Cliente {
    
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ 
        type: 'varchar', 
        length: 100,
        nullable: false 
    })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @MaxLength(100)
    nombre: string;

   
    @Column({ 
        type: 'varchar', 
        length: 150, 
        unique: true 
    })
    @IsEmail({}, { message: 'Formato de email inválido' })
    @IsNotEmpty({ message: 'El email es requerido' })
    email: string;

    
    @Column({ 
        type: 'varchar', 
        length: 15, 
        nullable: true 
    })
    telefono?: string;

  
    @CreateDateColumn()
    fechaCreacion: Date;

    @UpdateDateColumn()
    fechaActualizacion: Date;
}
