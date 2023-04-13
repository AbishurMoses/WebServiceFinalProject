import {Collection, Entity, OneToMany, PrimaryKey, Property} from "@mikro-orm/core"
import { CreateCourseDto } from "../dto/create-course.dto"
import { Section } from "src/section/entities/section.entity"

@Entity()
export class Course {
    constructor(createCourseDto: CreateCourseDto) {
        this.course_id = createCourseDto.course_id
        this.title = createCourseDto.title
        this.dept_name = createCourseDto.dept_name
        this.credits = createCourseDto.credits
    }
    @PrimaryKey({
        length: 8
    })
    course_id: string

    @Property({
        length: 50
    })
    title: string

    @Property({
        length: 20
    })
    dept_name: string

    @Property({
        length: 2
    })
    credits: number

    @OneToMany({
        entity: () => Section,
        mappedBy: section => section.course
    })
    sections = new Collection<Section>(this)
}
