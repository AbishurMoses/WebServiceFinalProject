import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ClassroomModule } from './classroom/classroom.module';
import { CourseModule } from './course/course.module';
import { InstructorModule } from './instructor/instructor.module';
import { SectionModule } from './section/section.module';
import { StudentModule } from './student/student.module';
import { TakesModule } from './takes/takes.module';
import { TeachesModule } from './teaches/teaches.module';

@Module({
  imports: [MikroOrmModule.forRoot(), BooksModule, ClassroomModule, CourseModule, InstructorModule, SectionModule, StudentModule, TakesModule, TeachesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
