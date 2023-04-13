import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Takes {
    @PrimaryKey({
        autoincrement:true,
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
}
