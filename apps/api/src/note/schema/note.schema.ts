import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Note {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    message: string;

    @Field()
    createdDate: Date;
}
