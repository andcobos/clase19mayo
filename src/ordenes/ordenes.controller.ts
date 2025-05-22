import { Controller, Post, Body } from '@nestjs/common';
import { OrdenService } from './ordenes.service';
import { Orden } from './orden.entity';

@Controller('ordenes')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) {}

  @Post()
  async crear(@Body() body: { clienteId: number; productoIds: number[] }): Promise<Orden> {
    const { clienteId, productoIds } = body;
    return this.ordenService.crearOrden(clienteId, productoIds);
  }
}
