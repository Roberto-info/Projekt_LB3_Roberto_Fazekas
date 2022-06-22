import { ApiProperty } from "@nestjs/swagger";

export class TicketDTO {   
    constructor(
        name: string,
        date:string,
        beschreibung: string
        ){}
        @ApiProperty()
        name: string;
        @ApiProperty()
        date: string;
        @ApiProperty()
        beschreibung: string;
}