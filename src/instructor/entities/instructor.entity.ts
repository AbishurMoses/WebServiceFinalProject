import { Entity, PrimaryKey, Property, OneToMany, Collection } from "@mikro-orm/core";
import { CreateInstructorDto } from "../dto/create-instructor.dto";
import { Teaches } from "src/teaches/entities/teach.entity";

@Entity()
export class Instructor {
    constructor(createInstructorDto: CreateInstructorDto) {
        this.i_id = createInstructorDto.i_id
        this.name = createInstructorDto.name
        this.dept_name = createInstructorDto.dept_name
        this.salary = createInstructorDto.salary
    }
    @PrimaryKey({
        autoincrement: true
    })
    id: number

    @Property({
        length: 5
    })
    i_id: number

    @Property({
        length: 20
    })
    name: string

    @Property({
        length: 10
    })
    salary: number

    @Property({
        length: 20
    })
    dept_name: string

    // @OneToMany({
    //     entity: () => Teaches
    //     mappedBy: teaches => teaches.instructor
    // })
    // teaches = new Collection<Teaches>(this)
}
