import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCliente2Dto {
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  nombre: string;

  @IsEmail({}, { message: 'El email debe tener un formato válido' })
  email: string;
}
