import { Injectable } from '@nestjs/common';
import { CreateTakeDto } from './dto/create-take.dto';
import { UpdateTakeDto } from './dto/update-take.dto';

@Injectable()
export class TakesService {
  create(createTakeDto: CreateTakeDto) {
    return 'This action adds a new take';
  }

  findAll() {
    return `This action returns all takes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} take`;
  }

  update(id: number, updateTakeDto: UpdateTakeDto) {
    return `This action updates a #${id} take`;
  }

  remove(id: number) {
    return `This action removes a #${id} take`;
  }
}
