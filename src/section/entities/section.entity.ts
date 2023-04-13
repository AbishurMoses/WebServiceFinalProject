import { Entity, PrimaryKey, Property, OneToMany, ManyToOne, Collection } from "@mikro-orm/core";
import { CreateSectionDto } from "../dto/create-section.dto";
import { Classroom } from "src/classroom/entities/classroom.entity";
import { Course } from "src/course/entities/course.entity";
import { Takes } from "src/takes/entities/take.entity";
import { Teaches } from "src/teaches/entities/teach.entity";

@Entity()
export class Section {
    constructor(createSectionDto: CreateSectionDto) {
        this.semester = createSectionDto.semester
        this.year = createSectionDto.year
        this.time_slot_id = createSectionDto.time_slot_id
    }

    @PrimaryKey({
        autoincrement: true
    })
    id: number

    @Property({
        length: 1
    })
    sec_id: number

    @Property({
        length: 6
    })
    semester: string

    @Property({
        length: 4
    })
    year: number

    @Property({
        length: 1
    })
    time_slot_id: string
    
    @ManyToOne({
        entity: () => Classroom,
        inversedBy: classroom => classroom.sections
    })
    classroom: Classroom

    @ManyToOne({
        entity: () => Course,
        inversedBy: course => course.sections
    })
    course: Course
}
