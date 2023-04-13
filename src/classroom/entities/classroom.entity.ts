import {Entity, PrimaryKey, Property, OneToMany, Collection} from "@mikro-orm/core"
import { CreateClassroomDto } from "../dto/create-classroom.dto"
import { Section } from "src/section/entities/section.entity"

@Entity()
export class Classroom {
    constructor(createClassroomDto: CreateClassroomDto) {
        this.building = createClassroomDto.building
        this.room_number = createClassroomDto.room_number
        this.capacity = createClassroomDto.capacity
    }

    @PrimaryKey({
        autoincrement: true
    })
    id: number

    @Property({
        length: 15
    })
    building: string

    @Property({
        length:4
    })
    room_number!: number

    @Property({
        length: 4
    })
    capacity!: number

    @OneToMany({
        entity: () => Section,
        mappedBy: section => section.classroom
    })
    sections = new Collection<Section>(this)
}
