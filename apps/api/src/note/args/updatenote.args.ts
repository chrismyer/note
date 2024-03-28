import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateNoteArgs {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    message: string;
}
