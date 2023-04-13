import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Student {
    @PrimaryKey({
        autoincrement:true,
    })
    id: number
}
