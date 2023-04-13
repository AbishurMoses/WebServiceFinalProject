import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Book } from './entities/book.entity';
import { Loaded } from '@mikro-orm/core';

@Injectable()
export class BooksService {
  constructor(
    private readonly em: EntityManager,
  ) {}

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll(): Promise<Loaded<Book[]>> {
    return this.em.find(Book, {});
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
