import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('books')
export class book {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;   

    @Column()
    author: string;

    @Column()
    publisher: string;

    @Column()
    publication: string;

    @Column()
    status: string;

    @Column()
    borrowedBy: string;

    @Column()
    borrowedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}
