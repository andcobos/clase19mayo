import { IsString, IsInt, Min, Max, MaxLength, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateComentarioDto {
  @IsString({ message: 'El comentario debe ser un texto' })
  @IsNotEmpty({ message: 'El comentario no puede estar vacío' })
  @MaxLength(200, { message: 'El comentario no puede superar los 200 caracteres' })
  texto: string;

  @IsInt({ message: 'El puntaje debe ser un número entero' })
  @Min(1, { message: 'El puntaje mínimo es 1' })
  @Max(5, { message: 'El puntaje máximo es 5' })
  puntaje: number;

  @IsString({ message: 'El nombre del usuario debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre del usuario es requerido' })
  usuario: string;

  @IsInt({ message: 'El ID del producto debe ser un número entero' })
  @IsPositive({ message: 'El ID del producto debe ser positivo' })
  productoId: number;
}