import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): any[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): any {
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: any): void {
        this.itemsService.create(createItemDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateItemDto: any): void {
        this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): void {
        this.itemsService.remove(id);
    }
}
