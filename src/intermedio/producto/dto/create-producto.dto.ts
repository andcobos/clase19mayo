import { IsNotEmpty, IsPositive, Min, MaxLength, IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductoDto {
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @IsString({ message: 'El nombre debe ser un texto' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    nombre: string;

    @IsPositive({ message: 'El precio debe ser mayor a 0' })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El precio debe ser un número con máximo 2 decimales' })
    @Type(() => Number)
    precio: number;

    @Min(0, { message: 'El stock debe ser un número entero positivo' })
    @IsNumber({}, { message: 'El stock debe ser un número' })
    @Type(() => Number)
    stock: number;

    @IsOptional()
    @IsString({ message: 'La descripción debe ser un texto' })
    descripcion?: string;
}