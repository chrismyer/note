import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateNoteArgs } from './args/createNote.args';
import { UpdateNoteArgs } from './args/updatenote.args';
import { NoteService } from './note.service';
import { Note } from './schema/note.schema';

@Resolver(() => Note)
export class NoteResolver {
    constructor(private readonly noteService: NoteService) {}

    @Query(() => [Note], { name: 'searchNotes' })
    searchNotes(
        @Args({ name: 'keyword', nullable: true, type: () => String })
        keyword?: string,
    ) {
        return this.noteService.searchNotes(keyword);
    }

    @Query(() => Note, { name: 'noteById' })
    getNoteById(@Args({ name: 'noteId', type: () => Int }) id: number) {
        return this.noteService.findNoteById(id);
    }

    @Mutation(() => Note, { name: 'createNote' })
    createNote(@Args('createNoteArgs') createNoteArgs: CreateNoteArgs) {
        return this.noteService.createNote(createNoteArgs);
    }

    @Mutation(() => Note, { name: 'updateNote' })
    updateNote(@Args('updateNoteArgs') updateNoteArgs: UpdateNoteArgs) {
        return this.noteService.updateNote(updateNoteArgs);
    }

    @Mutation(() => String, { name: 'deleteNote' })
    deleteNote(@Args({ name: 'id', type: () => Int }) id: number) {
        return this.noteService.deleteNote(id);
    }
}
