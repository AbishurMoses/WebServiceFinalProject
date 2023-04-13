import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateInstructorDto } from "../dto/create-instructor.dto";

@Entity()
export class Instructor {
    constructor(createInstructorDto: CreateInstructorDto) {
        this.ID = createInstructorDto.ID
        this.name = createInstructorDto.name
        this.dept_name = createInstructorDto.dept_name
        this.salary = createInstructorDto.salary
    }
    @PrimaryKey({
        length: 5
    })
    ID: number

    // Supposed to be dept_name from department
    // @ForeignKeyn({
    //     length: 10
    // })
    // FIXME: string

    @Property({
        length: 20
    })
    name: string

    @Property({
        length: 20
    })
    dept_name: string

    @Property({
        length: 10
    })
    salary: number
}
