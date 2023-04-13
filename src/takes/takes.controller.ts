import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TakesService } from './takes.service';
import { CreateTakeDto } from './dto/create-take.dto';
import { UpdateTakeDto } from './dto/update-take.dto';

@Controller('takes')
export class TakesController {
  constructor(private readonly takesService: TakesService) {}

  @Post()
  create(@Body() createTakeDto: CreateTakeDto) {
    return this.takesService.create(createTakeDto);
  }

  @Get()
  findAll() {
    return this.takesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.takesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTakeDto: UpdateTakeDto) {
    return this.takesService.update(+id, updateTakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.takesService.remove(+id);
  }
}
