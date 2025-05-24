import { IsEmail, IsNotEmpty, IsOptional, MaxLength, IsString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClienteDto {
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @IsString({ message: 'El nombre debe ser un texto' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    nombre: string;

    @IsEmail({}, { message: 'El email debe tener un formato válido' })
    @IsNotEmpty({ message: 'El email no puede estar vacío' })
    @MaxLength(150, { message: 'El email no puede tener más de 150 caracteres' })
    email: string;

    @IsOptional()
    @IsString({ message: 'El teléfono debe ser un texto' })
    @MaxLength(15, { message: 'El teléfono no puede tener más de 15 caracteres' })
    telefono?: string;

    @IsOptional()
    @IsBoolean({ message: 'Activo debe ser un valor booleano' })
    @Type(() => Boolean)
    activo?: boolean;
}
