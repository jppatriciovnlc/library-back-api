import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from 'class-transformer';

@Entity('users')
export class user {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;    

    @Exclude()
    @Column()
    password: string;

    @Column()
    group: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    status: string;

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
