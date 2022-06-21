import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string; 

    @Column()
    date:string;

    @Column()
    beschreibung:string;


}