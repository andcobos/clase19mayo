import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Param, 
    Delete,
    ParseIntPipe,
    ValidationPipe
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('clientes')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Post()
    create(@Body(ValidationPipe) createClienteDto: CreateClienteDto) {
        return this.clienteService.create(createClienteDto);
    }

    @Get()
    findAll() {
        return this.clienteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.clienteService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateData: any
    ) {
        return this.clienteService.update(id, updateData);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.clienteService.remove(id);
    }
}