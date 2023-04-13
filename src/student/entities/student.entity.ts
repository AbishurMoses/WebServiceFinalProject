import { Entity, PrimaryKey, Property, OneToMany, Collection } from "@mikro-orm/core";
import { Takes } from "src/takes/entities/take.entity";

@Entity()
export class Student {
    @PrimaryKey({
        autoincrement:true,
    })
    id: number

    @Property({
        length: 5
    })
    s_id: number

    @Property({
        length: 20
    })
    name: string

    @Property({
        length: 3
    })
    tot_cred: number

    @Property({
        length: 20
    })
    dept_name: string

    // @OneToMany({
    //     entity: () => Takes,
    //     mappedBy: takes => takes.student
    // })
    // student = new Collection<Takes>(this)
}
