import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Teaches {
    @PrimaryKey({
        autoincrement:true,
    })
    id: number
}
