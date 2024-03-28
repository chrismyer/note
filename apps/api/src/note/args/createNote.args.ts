import { CreateDateColumn } from 'typeorm';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNoteArgs {
    @Field()
    title: string;

    @Field()
    message: string;

    @CreateDateColumn()
    createdDate: Date;
}
